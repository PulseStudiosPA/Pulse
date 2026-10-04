<template>
  <section id="faq" class="relative py-24 sm:py-32 bg-white text-slate-900 border-t border-slate-200/70">
    <component :is="'script'" type="application/ld+json" v-html="faqJsonLd" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
      <div class="lg:col-span-4">
        <p v-reveal class="eyebrow !text-violet-700">{{ m.faq.eyebrow }}</p>
        <h2 v-reveal="60" class="mt-5 text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-slate-950 text-balance">
          {{ m.faq.title }}
        </h2>
        <p v-reveal="120" class="mt-4 text-slate-600">
          {{ m.faq.subtitle }}
        </p>
      </div>

      <div class="lg:col-span-8 divide-y divide-slate-200 border-y border-slate-200">
        <details
          v-for="(item, i) in m.faq.items"
          :key="item.q"
          v-reveal="i * 50"
          class="faq-item group"
          :open="i === 0"
        >
          <summary class="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left">
            <span class="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
              {{ item.q }}
            </span>
            <span
              class="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 ring-slate-200 group-open:bg-primary group-open:ring-primary transition-colors"
              aria-hidden="true"
            >
              <span class="absolute h-px w-3 bg-slate-700 group-open:bg-white" />
              <span class="absolute h-3 w-px bg-slate-700 transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
            </span>
          </summary>
          <p class="pb-6 pr-12 text-slate-600 leading-relaxed">{{ item.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/i18n'

const { m } = useI18n()

// FAQPage rich results are limited to authoritative sites since 2023, but the
// markup still gives search and AI answer engines clean Q&A pairs.
const faqJsonLd = computed(() =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: m.value.meta.htmlLang,
    mainEntity: m.value.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }),
)
</script>

<style scoped>
summary::-webkit-details-marker {
  display: none;
}

/* Progressive enhancement: animate open/close height where supported. */
@supports (interpolate-size: allow-keywords) {
  .faq-item {
    interpolate-size: allow-keywords;
  }

  .faq-item::details-content {
    block-size: 0;
    overflow: hidden;
    transition:
      block-size 0.4s cubic-bezier(0.22, 1, 0.36, 1),
      content-visibility 0.4s allow-discrete;
  }

  .faq-item[open]::details-content {
    block-size: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .faq-item::details-content {
    transition: none;
  }
}
</style>
