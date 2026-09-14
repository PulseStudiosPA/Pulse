import { ref } from 'vue'

export interface PointerGestureOptions {
  /** Number of recent samples to keep for velocity estimation. */
  historySize?: number
}

interface Sample {
  t: number
  pos: number
}

export interface GestureRelease {
  delta: number
  velocity: number
  direction: -1 | 0 | 1
}

/**
 * Pointer gesture composable implementing Apple's direct-manipulation rules.
 *
 * - Uses Pointer Events with setPointerCapture so tracking continues when
 *   the pointer leaves the element's bounds.
 * - Maintains a short position/timestamp history (last N samples) and uses
 *   linear regression over that window for a stable release velocity.
 * - Works along the X axis; caller can rotate client coords if needed.
 */
export function usePointerGesture(options: PointerGestureOptions = {}) {
  const { historySize = 4 } = options

  const isDragging = ref<boolean>(false)
  const delta = ref<number>(0)
  const velocity = ref<number>(0)
  const direction = ref<-1 | 0 | 1>(0)
  const startPoint = ref<number>(0)

  let activePointerId: number | null = null
  let startPos = 0
  let element: Element | null = null
  const samples: Sample[] = []

  function reset(): void {
    samples.length = 0
    delta.value = 0
    velocity.value = 0
    direction.value = 0
    isDragging.value = false
    activePointerId = null
    element = null
  }

  function recordSample(pos: number): void {
    const now = performance.now()
    samples.push({ t: now, pos })
    if (samples.length > historySize) samples.shift()
  }

  function computeVelocity(): number {
    if (samples.length < 2) return 0
    const n = samples.length
    let sumT = 0,
      sumP = 0,
      sumTP = 0,
      sumTT = 0
    const t0 = samples[0]!.t
    for (const s of samples) {
      const t = (s.t - t0) / 1000
      const p = s.pos
      sumT += t
      sumP += p
      sumTP += t * p
      sumTT += t * t
    }
    const denom = n * sumTT - sumT * sumT
    if (denom === 0) return 0
    return (n * sumTP - sumT * sumP) / denom
  }

  function start(e: PointerEvent, el?: Element | null): void {
    if (activePointerId !== null) return
    activePointerId = e.pointerId
    const target = e.currentTarget
    element = el || (target instanceof Element ? target : null)
    startPos = e.clientX
    startPoint.value = startPos
    delta.value = 0
    velocity.value = 0
    direction.value = 0
    samples.length = 0
    recordSample(startPos)
    isDragging.value = true

    if (element) {
      try {
        ;(element as Element & { setPointerCapture: (id: number) => void }).setPointerCapture(
          e.pointerId
        )
      } catch {
        /* capture may fail in some browsers; tracking still works via events */
      }
    }
  }

  function move(e: PointerEvent): void {
    if (e.pointerId !== activePointerId) return
    if (!isDragging.value) return
    const pos = e.clientX
    delta.value = pos - startPos
    direction.value = delta.value === 0 ? 0 : (delta.value > 0 ? 1 : -1)
    recordSample(pos)
    velocity.value = computeVelocity()
  }

  /**
   * Release the gesture. Returns the final delta and velocity at the
   * moment of release, so the caller can hand the velocity to a spring.
   */
  function release(e?: PointerEvent): GestureRelease | null {
    if (e && e.pointerId !== activePointerId) return null
    if (!isDragging.value) return null

    const finalDelta = delta.value
    const finalVelocity = velocity.value

    if (element && activePointerId !== null) {
      try {
        ;(element as Element & { releasePointerCapture: (id: number) => void }).releasePointerCapture(
          activePointerId
        )
      } catch {
        /* noop */
      }
    }

    const result: GestureRelease = {
      delta: finalDelta,
      velocity: finalVelocity,
      direction: direction.value,
    }
    reset()
    return result
  }

  function cancel(e?: PointerEvent): void {
    if (e && e.pointerId !== activePointerId) return
    if (element && activePointerId !== null) {
      try {
        ;(element as Element & { releasePointerCapture: (id: number) => void }).releasePointerCapture(
          activePointerId
        )
      } catch {
        /* noop */
      }
    }
    reset()
  }

  return {
    isDragging,
    delta,
    velocity,
    direction,
    startPoint,
    start,
    move,
    release,
    cancel,
  }
}

/**
 * Apple's exponential-decay momentum projection.
 *
 * Exact function from "Designing Fluid Interfaces" (WWDC 2018). It is
 * NOT the physics-textbook v²/(2·a).
 *
 * @param initialVelocity  release velocity in px/s
 * @param decelerationRate 0.998 ≈ natural scroll, 0.99 ≈ snappier
 * @returns total distance to rest, in px
 */
export function projectMomentum(initialVelocity: number, decelerationRate = 0.998): number {
  return ((initialVelocity / 1000) * decelerationRate) / (1 - decelerationRate)
}
