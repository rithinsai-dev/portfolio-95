import { Window } from "@/components/window"

interface BiographyWindowProps {
  id: string
  title: string
  zIndex: number
}

export function BiographyWindow({ id, title, zIndex }: BiographyWindowProps) {
  return (
    <Window id={id} title={title} zIndex={zIndex} className="w-[800px] h-[600px]">
      <div className="p-8 h-[calc(100%-2rem)] overflow-auto">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-2xl font-bold text-center">About Rithin Sai</h1>

          <p className="text-sm">
            Hi, I’m <strong>Rithin Sai</strong>, a passionate full-stack developer with expertise in 
            <strong> React.js, Next.js, Node.js, and backend technologies</strong>. I enjoy solving problems 
            through technology and love building scalable and user-friendly applications.
          </p>

          <h2 className="text-lg font-bold border-b border-gray-300 mb-2">Interests</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Web-based multiplayer game development 🚀</li>
            <li>Machine learning & AI (Fake image detection, stock prediction) 🤖</li>
            <li>Full-stack web development (React, Tailwind, Next.js) 💻</li>
          </ul>

          <h2 className="text-lg font-bold border-b border-gray-300 mb-2">Education & Experience</h2>
          <p className="text-sm">
            Currently pursuing a <strong>B.Tech in Computer Science at SRM University</strong>, with hands-on experience 
            freelancing as a frontend engineer and building AI-driven applications.
          </p>

          <h2 className="text-lg font-bold border-b border-gray-300 mb-2">Connect with Me</h2>
          <p className="text-sm">
            Find me on 
            <a href="https://github.com/rithinsai-dev" target="_blank" className="text-blue-500"> GitHub</a>, 
            <a href="https://www.linkedin.com/in/rithinsai-dev/" target="_blank" className="text-blue-500"> LinkedIn</a>, 
            or <a href="mailto:Rithinsai.pamerla@gmail.com" className="text-blue-500">Email</a>.
          </p>
        </div>
      </div>
    </Window>
  )
}
