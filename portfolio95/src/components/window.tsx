"use client"

import type React from "react"

import { useState } from "react"
import { Minus, Square, X } from "lucide-react"
import { useWindows } from "@/components/window-context"
import { cn } from "@/lib/utils"

interface WindowProps {
  id: string
  title: string
  children: React.ReactNode
  zIndex: number
  className?: string
}

export function Window({ id, title, children, zIndex, className }: WindowProps) {
  const { minimizeWindow, removeWindow, bringToFront } = useWindows()
  const [position, setPosition] = useState({ x: 100, y: 100 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [isMinimized, setIsMinimized] = useState(false)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
    bringToFront(id)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div
      className={cn("fixed bg-gray-200 border-2 border-gray-300 shadow-lg rounded-t-lg", className)}
      style={{
        left: position.x,
        top: position.y,
        zIndex: zIndex,
      }}
    >
      <div
        className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between rounded-t cursor-move"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <span className="text-sm font-bold">{title}</span>
        <div className="flex items-center gap-1">
          <button onClick={() => minimizeWindow(id)} className="p-1 hover:bg-blue-700 rounded">
            <Minus className="h-3 w-3" />
          </button>
          <button className="p-1 hover:bg-blue-700 rounded">
            <Square className="h-3 w-3" />
          </button>
          <button onClick={() => removeWindow(id)} className="p-1 hover:bg-blue-700 rounded">
            <X className="h-3 w-3" />
          </button>
        </div>
      </div>
      {children}
      {isMinimized && <div className="absolute inset-0 bg-gray-200 opacity-50" />}
    </div>
  )
}

