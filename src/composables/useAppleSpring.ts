import { ref, onUnmounted } from 'vue'

export interface AppleSpringOptions {
  /** Apple damping ratio. 1.0 = critically damped (no overshoot). < 1 bounces. */
  damping?: number
  /** Time in seconds for the spring to "reach" the target. Lower = snappier. */
  response?: number
  /** Simulation timestep in seconds. 1/60 ≈ 60fps. */
  dt?: number
  /** Snap to rest when |x - target| < this AND |v| < restV. */
  restPosThreshold?: number
  /** Velocity threshold (units/s) below which we consider the spring at rest. */
  restVelThreshold?: number
}

/**
 * Apple-style spring physics composable.
 *
 * Implemented with semi-implicit Euler integration (the standard for
 * real-time, velocity-aware spring animation). Two designer-friendly
 * knobs map directly to Apple's WWDC values:
 *
 * - `damping` is the damping ratio ζ. 1.0 = critically damped (no overshoot).
 *   Lower values bounce.
 * - `response` is the time in seconds for the spring to "reach" the target.
 *   It is NOT a duration — a spring has no fixed duration; settle time
 *   emerges from the parameters.
 *
 * Animation is interruptible: calling `animate()` again reads the live
 * `value` (current presentation) and starts from there with the supplied
 * `velocity`. That is the velocity-handoff pattern Apple describes in
 * "Designing Fluid Interfaces" (WWDC 2018).
 */
export function useAppleSpring(options: AppleSpringOptions = {}) {
  const {
    damping = 1.0,
    response = 0.4,
    dt = 1 / 60,
    restPosThreshold = 0.5,
    restVelThreshold = 0.5,
  } = options

  const value = ref<number>(0)
  const isAnimating = ref<boolean>(false)

  // Convert Apple params to physics constants. We assume unit mass.
  const omega0 = (2 * Math.PI) / response
  const k = omega0 * omega0
  const c = 2 * omega0 * damping

  let target = 0
  let velocityState = 0
  let rafId: number | null = null
  let lastTimestamp: number | null = null
  const listeners = new Set<(v: number) => void>()

  function notify(v: number): void {
    value.value = v
    listeners.forEach((fn) => fn(v))
  }

  function setImmediate(v: number): void {
    if (rafId !== null) cancelAnimationFrame(rafId)
    target = v
    velocityState = 0
    isAnimating.value = false
    notify(v)
  }

  function step(timestamp: number): void {
    if (lastTimestamp === null) lastTimestamp = timestamp
    // Cap delta time to avoid huge jumps after tab-switch / breakpoint resume.
    const frameDt = Math.min(dt, (timestamp - lastTimestamp) / 1000 + dt)
    lastTimestamp = timestamp

    // Semi-implicit Euler: update velocity first, then position with new v.
    // This is unconditionally stable for springs.
    const x = value.value
    const acceleration = -k * (x - target) - c * velocityState
    velocityState += acceleration * frameDt
    const newX = x + velocityState * frameDt

    notify(newX)

    const distToTarget = Math.abs(target - newX)
    if (distToTarget < restPosThreshold && Math.abs(velocityState) < restVelThreshold) {
      notify(target)
      velocityState = 0
      isAnimating.value = false
      rafId = null
      lastTimestamp = null
      return
    }

    rafId = requestAnimationFrame(step)
  }

  /**
   * Animate toward `target`. If a previous animation is in flight, the new
   * one starts from the CURRENT `value` (presentation), not the previous
   * `fromValue`, with the supplied `velocity` (units/s) inherited as the
   * initial velocity.
   *
   * Sign convention for velocity: positive means moving in the +x direction
   * (i.e. increasing value). For a carousel that snaps left on a leftward
   * flick, the velocity is negative.
   */
  function animate(nextTarget: number, velocity = 0): void {
    target = nextTarget
    velocityState = velocity
    lastTimestamp = null
    if (rafId !== null) cancelAnimationFrame(rafId)
    isAnimating.value = true
    rafId = requestAnimationFrame(step)
  }

  function stop(): void {
    if (rafId !== null) cancelAnimationFrame(rafId)
    rafId = null
    isAnimating.value = false
    lastTimestamp = null
  }

  onUnmounted(() => {
    if (rafId !== null) cancelAnimationFrame(rafId)
  })

  return {
    value,
    isAnimating,
    animate,
    stop,
    setImmediate,
  }
}
