"use client"

import { useEffect, useRef, useState, useCallback, type RefObject } from "react"

interface UseRevealOptions {
  threshold?: number
  once?: boolean
}

function isElementInView(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect()
  return rect.top < window.innerHeight && rect.bottom > 0
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0, once = true } = options
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const triggered = useRef(false)

  const check = useCallback(() => {
    if (triggered.current) return
    const el = ref.current
    if (!el) return
    if (isElementInView(el)) {
      triggered.current = true
      setIsVisible(true)
    }
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // 首次检查：已在视口内则立即显示
    if (isElementInView(el)) {
      triggered.current = true
      setIsVisible(true)
      return
    }

    // IntersectionObserver 主检测
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin: "50px 0px 50px 0px" }
    )
    observer.observe(el)

    // scroll 事件作为后备，防止 Observer 漏触发
    window.addEventListener("scroll", check, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", check)
    }
  }, [threshold, check])

  return [ref, isVisible]
}
