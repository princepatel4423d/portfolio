import React from 'react'
import { ThemeProvider } from './context/ThemeProvider'
import { SearchProvider } from './context/SearchProvider'

export function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SearchProvider>{children}</SearchProvider>
    </ThemeProvider>
  )
}
