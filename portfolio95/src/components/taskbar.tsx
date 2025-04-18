import { Menu } from "lucide-react"
import { useWindows } from "@/components/window-context"
import { useState, useEffect } from 'react';

interface TaskbarProps {
  onSidePanelToggle: () => void
}

export function Taskbar({ onSidePanelToggle }: TaskbarProps) {
  const { windows, activeWindows, restoreWindow } = useWindows()
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeIST = currentTime.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' });


  return (
    <div className="h-10 bg-gray-200 border-t-2 border-gray-300 flex items-center px-2">
      <button onClick={onSidePanelToggle} className="flex items-center gap-2 px-4 py-1 rounded hover:bg-gray-300">
        <Menu className="h-4 w-4" />
        <span className="text-sm font-bold">Start</span>
      </button>
      <div className="flex-1 flex items-center gap-1 ml-2 overflow-x-auto">
        {activeWindows.map((id) => {
          const window = windows.find((w) => w.id === id)
          if (!window) return null
          return (
            <button
              key={id}
              onClick={() => restoreWindow(id)}
              className={`px-2 py-1 text-xs border border-gray-400 rounded-sm ${
                window.isMinimized ? "bg-gray-300" : "bg-gray-400"
              }`}
            >
              {window.title}
            </button>
          )
        })}
      </div>
      <div className="ml-2 px-2 py-1 text-sm font-bold border-2 border-gray-400 rounded-sm bg-gray-300 font-mono" style={{ borderStyle: 'inset' }}>
        {timeIST}
      </div>
    </div>
  )
}
