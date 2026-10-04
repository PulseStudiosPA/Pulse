import type { Directive } from 'vue'

type SpotlightEl = HTMLElement & { __spotlight?: (e: PointerEvent) => void }

/**
 * v-spotlight: exposes the pointer position as --mx / --my so the `.spotlight`
 * CSS can paint a glow that follows the cursor. Mouse/pen only; touch devices
 * skip it because there is no hover.
 */
export const vSpotlight: Directive<SpotlightEl> = {
  mounted(el) {
    el.classList.add('spotlight')
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      el.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }
    el.__spotlight = onMove
    el.addEventListener('pointermove', onMove, { passive: true })
  },
  unmounted(el) {
    if (el.__spotlight) el.removeEventListener('pointermove', el.__spotlight)
  },
}
