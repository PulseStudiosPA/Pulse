import type { Directive } from 'vue'

/**
 * v-reveal: fades/slides an element in the first time it enters the viewport.
 * Optional value = stagger delay in ms (`v-reveal="120"`).
 *
 * Uses a single shared IntersectionObserver and only toggles a class, so the
 * animation itself stays in CSS (compositor-only: opacity + transform).
 * Reduced-motion users get the content immediately via the CSS media query.
 */
let observer: IntersectionObserver | null = null

function getObserver(): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-revealed')
          observer?.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
  }
  return observer
}

export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    const io = getObserver()
    if (io) io.observe(el)
    else el.classList.add('is-revealed')
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
