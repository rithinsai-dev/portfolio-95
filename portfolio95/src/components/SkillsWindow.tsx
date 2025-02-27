import { Window } from "@/components/window";

interface SkillsWindowProps {
  id: string;
  title: string;
  zIndex: number;
}

export function SkillsWindow({ id, title, zIndex }: SkillsWindowProps) {
  return (
    <Window id={id} title={title} zIndex={zIndex} className="w-[600px] h-[400px]">
      <div className="p-6 h-[calc(100%-2rem)] overflow-auto">
        <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="text-xl font-bold text-center">Technical Skills</h1>

          <div>
            <h2 className="text-lg font-bold border-b border-gray-300 mb-2">Languages</h2>
            <p className="text-sm">Java, C/C++, Python, JavaScript, SQL, Bash</p>
          </div>

          <div>
            <h2 className="text-lg font-bold border-b border-gray-300 mb-2">Frameworks</h2>
            <p className="text-sm">Node.js, Express.js, Scikit-learn, TensorFlow, Django</p>
          </div>

          <div>
            <h2 className="text-lg font-bold border-b border-gray-300 mb-2">Libraries</h2>
            <p className="text-sm">React, Next.js, MongoDB, pandas, NumPy, Matplotlib, Scikit-learn</p>
          </div>

          <div>
            <h2 className="text-lg font-bold border-b border-gray-300 mb-2">Tools</h2>
            <p className="text-sm">Git, PostgreSQL, MySQL</p>
          </div>
        </div>
      </div>
    </Window>
  );
}
