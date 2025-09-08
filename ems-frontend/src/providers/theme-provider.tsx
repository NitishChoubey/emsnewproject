"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: string
  storageKey?: string
}

export function ThemeProvider({ 
  children, 
  defaultTheme = "system",
  storageKey = "ems-theme",
  ...props 
}: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      attribute="class"
      defaultTheme={defaultTheme}
      enableSystem
      disableTransitionOnChange
      storageKey={storageKey}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}