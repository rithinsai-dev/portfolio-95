import type React from "react"
interface DesktopIconProps {
  title: string
  icon: React.ReactNode
  onClick: () => void
}

export function DesktopIcon({ title, icon, onClick }: DesktopIconProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 p-2 rounded hover:bg-white/10 focus:bg-white/10"
    >
      {icon}
      <span className="text-white text-sm">{title}</span>
    </button>
  )
}

