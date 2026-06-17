"use client"

import { useTheme } from "next-themes"
import { Toaster as SonnerToaster } from "sonner"

export function Toaster() {
  const { theme } = useTheme()
  return (
    <SonnerToaster
      theme={(theme as "light" | "dark") ?? "dark"}
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            "!bg-card !text-card-foreground !border-border !rounded-lg !shadow-lg",
          description: "!text-muted-foreground",
        },
      }}
    />
  )
}
