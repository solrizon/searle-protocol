"use client"

import { type ReactNode, type CSSProperties } from "react"
import { useReveal } from "@/hooks/use-reveal"

type Direction = "up" | "down" | "left" | "right" | "none"
type Variant = "slide" | "fade" | "scale" | "blur" | "clip-up" | "clip-left"

interface RevealProps {
  children: ReactNode
  direction?: Direction
  variant?: Variant
  delay?: number
  duration?: number
  distance?: number
  className?: string
  style?: CSSProperties
  threshold?: number
  easing?: string
}

const getHiddenStyles = (
  variant: Variant,
  direction: Direction,
  distance: number
): CSSProperties => {
  switch (variant) {
    case "scale":
      return { opacity: 0, transform: "scale(0.92)" }
    case "blur":
      return { opacity: 0, filter: "blur(8px)", transform: "translateY(12px)" }
    case "clip-up":
      return { clipPath: "inset(100% 0 0 0)" }
    case "clip-left":
      return { clipPath: "inset(0 100% 0 0)" }
    case "fade":
      return { opacity: 0 }
    case "slide":
    default: {
      const transforms: Record<Direction, string> = {
        up: `translateY(${distance}px)`,
        down: `translateY(-${distance}px)`,
        left: `translateX(${distance}px)`,
        right: `translateX(-${distance}px)`,
        none: "none",
      }
      return { opacity: 0, transform: transforms[direction] }
    }
  }
}

const getVisibleStyles = (variant: Variant): CSSProperties => {
  switch (variant) {
    case "scale":
      return { opacity: 1, transform: "scale(1)" }
    case "blur":
      return { opacity: 1, filter: "blur(0)", transform: "translateY(0)" }
    case "clip-up":
      return { clipPath: "inset(0 0 0 0)" }
    case "clip-left":
      return { clipPath: "inset(0 0 0 0)" }
    case "fade":
      return { opacity: 1 }
    case "slide":
    default:
      return { opacity: 1, transform: "none" }
  }
}

const getTransitionProps = (variant: Variant): string => {
  switch (variant) {
    case "clip-up":
    case "clip-left":
      return "clip-path"
    case "blur":
      return "opacity, filter, transform"
    case "scale":
      return "opacity, transform"
    case "fade":
      return "opacity"
    default:
      return "opacity, transform"
  }
}

export function Reveal({
  children,
  direction = "up",
  variant = "slide",
  delay = 0,
  duration = 0.7,
  distance = 40,
  className = "",
  style = {},
  threshold = 0.15,
  easing = "cubic-bezier(0.25, 0.1, 0.25, 1)",
}: RevealProps) {
  const [ref, isVisible] = useReveal<HTMLDivElement>({ threshold })

  const hidden = getHiddenStyles(variant, direction, distance)
  const visible = getVisibleStyles(variant)
  const props = getTransitionProps(variant)
  const current = isVisible ? visible : hidden

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...current,
        transition: props
          .split(", ")
          .map((p) => `${p} ${duration}s ${easing} ${delay}s`)
          .join(", "),
        willChange: props.replace(/, /g, ", "),
      }}
    >
      {children}
    </div>
  )
}
