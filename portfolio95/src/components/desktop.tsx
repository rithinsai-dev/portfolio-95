"use client"

import { Monitor, Image, FileText, Mail } from "lucide-react"
import { DesktopIcon } from "@/components/desktop-icon"
import { ProjectFolder } from "@/components/project-folder"
import { useWindows } from "@/components/window-context"

export function Desktop() {
  const { addWindow } = useWindows()

  const icons = [
    {
      title: "Biography",
      icon: <img src="/biography.png" alt="Biography" className="h-8 w-8" />,
      onClick: () => addWindow({ title: "Biography", content: "biography" }),
    },
    {
      title: "Resume",
      icon: <img src="/resume.png" alt="Résumé" className="h-8 w-8" />,
      onClick: () => addWindow({ title: "Résumé", content: "resume" }),
    },
    {
      title: "Mail",
      icon: <img src="/mail.png" alt="Résumé" className="h-8 w-8" />,
      onClick: () => addWindow({ title: "Mail", content: "mail" }),
    },
    
  ]
  

  return (
    <div className="p-4 grid grid-cols-1 gap-4 w-fit">
      <ProjectFolder />
      {icons.map((icon) => (
        <DesktopIcon key={icon.title} title={icon.title} icon={icon.icon} onClick={icon.onClick} />
      ))}
    </div>
  )
}

