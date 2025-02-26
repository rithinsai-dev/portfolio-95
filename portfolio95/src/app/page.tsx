"use client"

import { useState } from "react"
import { Desktop } from "@/components/desktop"
import { Taskbar } from "@/components/taskbar"
import { SidePanel } from "@/components/side-panel"
import { WindowManager } from "@/components/window-manager"
import { WindowProvider } from "@/components/window-context"

export default function Page() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)

  return (
    <WindowProvider>
      <main className="h-screen flex flex-col">
        <div className="flex-1 relative">
          <Desktop />
          <WindowManager />
          <SidePanel isOpen={isSidePanelOpen} onClose={() => setIsSidePanelOpen(false)} />
        </div>
        <Taskbar onSidePanelToggle={() => setIsSidePanelOpen(!isSidePanelOpen)} />
      </main>
    </WindowProvider>
  )
}

