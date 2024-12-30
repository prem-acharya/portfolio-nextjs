'use client';

import { useRef } from 'react'
import { flushSync } from 'react-dom'

const isBrowser = typeof window !== 'undefined'

interface ModeAnimationHook {
  ref: React.RefObject<HTMLButtonElement>
  toggleSwitchTheme: () => Promise<void>
}

interface ModeAnimationOptions {
  duration?: number
  easing?: string
  pseudoElement?: string
  globalClassName?: string
}

export const useModeAnimation = (props?: ModeAnimationOptions): ModeAnimationHook => {
  const {
    duration = 750,
    easing = 'ease-in-out',
    pseudoElement = '::view-transition-new(root)',
    globalClassName = 'dark',
  } = props || {}
  
  const ref = useRef<HTMLButtonElement>(null)

  const toggleSwitchTheme = async () => {
    if (
      !ref.current ||
      !(document as any).startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    await (document as any).startViewTransition(() => {
      flushSync(() => {
        // Logic to toggle theme can be added here if needed
      })
    }).ready

    const { top, left, width, height } = ref.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const right = window.innerWidth - left
    const bottom = window.innerHeight - top
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom))

    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`],
      },
      {
        duration,
        easing,
        pseudoElement,
      }
    )
  }

  return {
    ref,
    toggleSwitchTheme,
  }
}