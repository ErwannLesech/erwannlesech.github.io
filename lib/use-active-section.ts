"use client"

import { useEffect, useState } from "react"

const SECTIONS = [
  "about",
  "experience",
  "projects",
  "skills",
  "publications",
  "contact",
] as const

export function useActiveSection() {
  const [active, setActive] = useState<string>("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    )

    const hero = document.getElementById("hero")
    if (hero) observer.observe(hero)
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return active
}

export { SECTIONS }
