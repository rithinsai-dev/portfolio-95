"use client"

import { useWindows } from "@/components/window-context"
import { Window } from "@/components/window"
import { ResumeWindow } from "@/components/resume-window"
import { BiographyWindow } from "@/components/BiographyWindow"
import { MailForm } from "@/components/MailForm"

export function WindowManager() {
  const { windows } = useWindows()

  return (
    <>
      {windows.map((window) => {
        if (window.isMinimized) return null

        if (window.content === "resume") {
          return <ResumeWindow key={window.id} id={window.id} title={window.title} zIndex={window.zIndex} />
        }
        if (window.content === "biography") {
          return <BiographyWindow key={window.id} id={window.id} title={window.title} zIndex={window.zIndex} />
        }
        if (window.content === "mail") {
          return <MailForm key={window.id} id={window.id} title={window.title} zIndex={window.zIndex} />
        }

        return (
          <Window key={window.id} id={window.id} title={window.title} zIndex={window.zIndex}>
            {window.component || (
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">{window.title}</h2>
                <p>Content for {window.content}</p>
              </div>
            )}
          </Window>
        )
      })}
    </>
  )
}

