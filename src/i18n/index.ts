import { computed, ref, watch } from 'vue'
import { messages, LOCALES, type Locale, type Messages } from './messages'

export * from './messages'

const SITE_URL = 'https://www.pulsestudio.dev/'
const STORAGE_KEY = 'pulse-locale'
const DEFAULT_LOCALE: Locale = 'es'

function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as string[]).includes(value)
}

/**
 * Resolution order: ?lang= query > stored preference > Spanish.
 *
 * Browser-language detection is intentionally skipped: Googlebot renders with
 * an en-US navigator, so auto-detecting would make the canonical Spanish URL
 * render in English for the crawler. The query param keeps each language on
 * its own crawlable URL, which is what hreflang needs.
 */
function resolveInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const fromQuery = new URLSearchParams(window.location.search).get('lang')
  if (isLocale(fromQuery)) return fromQuery
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    // Storage can be blocked (private mode, strict cookies); fall through.
  }
  return DEFAULT_LOCALE
}

const locale = ref<Locale>(resolveInitialLocale())
const m = computed<Messages>(() => messages[locale.value])
// The 404 view swaps the document title; tracked here so a locale switch
// doesn't overwrite it with the home title.
const isNotFound = ref(false)

function localizedUrl(target: Locale): string {
  return target === DEFAULT_LOCALE ? SITE_URL : `${SITE_URL}?lang=${target}`
}

function setMeta(selector: string, attr: 'content' | 'href', value: string): void {
  document.querySelector(selector)?.setAttribute(attr, value)
}

/** Keeps <html lang>, title, description, canonical and OG tags in sync. */
function syncHead(): void {
  if (typeof document === 'undefined') return
  const meta = m.value.meta
  document.documentElement.lang = meta.htmlLang
  document.title = isNotFound.value ? meta.notFoundTitle : meta.title
  setMeta('meta[name="description"]', 'content', meta.description)
  setMeta('meta[property="og:title"]', 'content', meta.title)
  setMeta('meta[property="og:description"]', 'content', meta.description)
  setMeta('meta[property="og:locale"]', 'content', meta.ogLocale)
  setMeta('meta[property="og:url"]', 'content', localizedUrl(locale.value))
  setMeta('meta[name="twitter:title"]', 'content', meta.title)
  setMeta('meta[name="twitter:description"]', 'content', meta.description)
  setMeta('link[rel="canonical"]', 'href', localizedUrl(locale.value))
}

function syncUrl(): void {
  const url = new URL(window.location.href)
  if (locale.value === DEFAULT_LOCALE) url.searchParams.delete('lang')
  else url.searchParams.set('lang', locale.value)
  window.history.replaceState(window.history.state, '', url)
}

watch(isNotFound, syncHead)

watch(locale, (next) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Non-critical: the URL still carries the choice.
  }
  syncUrl()
  syncHead()
})

export function initI18n(): void {
  syncUrl()
  syncHead()
}

export function useI18n() {
  return {
    locale,
    m,
    locales: LOCALES,
    setLocale: (next: Locale) => {
      locale.value = next
    },
    setNotFound: (value: boolean) => {
      isNotFound.value = value
    },
  }
}
