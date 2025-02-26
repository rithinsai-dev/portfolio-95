import { useState } from "react"
import { Window } from "@/components/window"

interface MailFormProps {
  id: string
  title: string
  zIndex: number
}

export function MailForm({ id, title, zIndex }: MailFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const sendMail = () => {
    const subject = encodeURIComponent(`Mail from ${name}`)
    const body = encodeURIComponent(message)
    const mailtoLink = `mailto:Rithinsai.pamerla@gmail.com?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
  }

  return (
    <Window id={id} title={title} zIndex={zIndex} className="w-[500px] h-[400px]">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Send me a mail (doesnt work)</h2>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded h-24"
          />

          <button
            onClick={sendMail}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Send Mail
          </button>
        </div>
      </div>
    </Window>
  )
}
