"use client"

import type React from "react"

import { createContext, useContext, useState, type ReactNode } from "react"

type Window = {
  id: string
  title: string
  content: string
  component?: ReactNode
  isMinimized: boolean
  zIndex: number
}

type WindowContextType = {
  windows: Window[]
  activeWindows: string[]
  addWindow: (window: Omit<Window, "id" | "isMinimized" | "zIndex">) => void
  removeWindow: (id: string) => void
  minimizeWindow: (id: string) => void
  restoreWindow: (id: string) => void
  bringToFront: (id: string) => void
}

const WindowContext = createContext<WindowContextType | undefined>(undefined)

export function WindowProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<Window[]>([])
  const [activeWindows, setActiveWindows] = useState<string[]>([])
  const [nextZIndex, setNextZIndex] = useState(1)

  const addWindow = (window: Omit<Window, "id" | "isMinimized" | "zIndex">) => {
    const id = Math.random().toString()
    setWindows((prev) => [
      ...prev,
      {
        ...window,
        id,
        isMinimized: false,
        zIndex: nextZIndex,
      },
    ])
    setActiveWindows((prev) => [...prev, id])
    setNextZIndex((prev) => prev + 1)
  }

  const removeWindow = (id: string) => {
    setWindows((prev) => prev.filter((window) => window.id !== id))
    setActiveWindows((prev) => prev.filter((windowId) => windowId !== id))
  }

  const minimizeWindow = (id: string) => {
    setWindows((prev) => prev.map((window) => (window.id === id ? { ...window, isMinimized: true } : window)))
  }

  const restoreWindow = (id: string) => {
    setWindows((prev) => prev.map((window) => (window.id === id ? { ...window, isMinimized: false } : window)))
    bringToFront(id)
  }

  const bringToFront = (id: string) => {
    setWindows((prev) => prev.map((window) => (window.id === id ? { ...window, zIndex: nextZIndex } : window)))
    setNextZIndex((prev) => prev + 1)
  }

  return (
    <WindowContext.Provider
      value={{
        windows,
        activeWindows,
        addWindow,
        removeWindow,
        minimizeWindow,
        restoreWindow,
        bringToFront,
      }}
    >
      {children}
    </WindowContext.Provider>
  )
}

export function useWindows() {
  const context = useContext(WindowContext)
  if (!context) {
    throw new Error("useWindows must be used within a WindowProvider")
  }
  return context
}

