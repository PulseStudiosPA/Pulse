import type { vReveal } from './reveal'
import type { vSpotlight } from './spotlight'

// Template type-checking for the globally registered directives.
declare module 'vue' {
  export interface GlobalDirectives {
    vReveal: typeof vReveal
    vSpotlight: typeof vSpotlight
  }
}

export {}
