import { Window } from "@/components/window";

interface ResumeWindowProps {
  id: string;
  title: string;
  zIndex: number;
}

export function ResumeWindow({ id, title, zIndex }: ResumeWindowProps) {
  return (
    <Window id={id} title={title} zIndex={zIndex} className="w-[800px] h-[600px]">
      <div className="p-8 h-[calc(100%-2rem)] overflow-auto">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Pamerla Rithin</h1>
            <p className="text-sm text-gray-600">+91 6304545037 | Rithinsai.pamerla@gmail.com</p>
            <p className="text-sm text-gray-600">linkedin.com/in/rithinsai-dev/ | github.com/rithinsai-dev</p>
          </div>

          <div>
            <h2 className="text-lg font-bold border-b border-gray-300 mb-2">SUMMARY</h2>
            <p className="text-sm">
              Full-stack developer passionate about crafting scalable and user-friendly web applications, with expertise in React.js, Next.js, and Node.js.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold border-b border-gray-300 mb-2">WORK EXPERIENCE</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold">Freelancer | SRMAP Fest</p>
                    <p className="text-sm italic">Frontend Engineer | Next.js</p>
                  </div>
                  <p className="text-sm">Jan 2025 - Present</p>
                </div>
                <ul className="list-disc list-inside text-sm space-y-1 mt-1">
                  <li>Developed a feature-rich college fest website for ticket purchases and competition enrollments.</li>
                  <li>Deployed on Vercel for smooth and scalable performance.</li>
                  <li>Prioritized responsive and intuitive design principles for a seamless user experience.</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold">Freelancer | Family Business</p>
                    <p className="text-sm italic">Frontend Engineer | HTML5, CSS, JavaScript</p>
                  </div>
                  <p className="text-sm">Jun 2024 - Jul 2024</p>
                </div>
                <ul className="list-disc list-inside text-sm space-y-1 mt-1">
                  <li>Developed a car rental website, increasing user engagement by 30% and bookings by 20%.</li>
                  <li>Implemented real-time car availability and filtering features, improving customer retention by 15%.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold border-b border-gray-300 mb-2">PROJECT EXPERIENCE</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">MNIST Digit Recognition Model</p>
                <p className="text-sm italic">Next.js, Node.js, Python, TensorFlow, Keras, TensorFlow.js</p>
                <ul className="list-disc list-inside text-sm space-y-1 mt-1">
                  <li>Trained a CNN model achieving 99.2% accuracy using data augmentation and dropout regularization.</li>
                  <li>Built a real-time web app with &lt;100ms prediction latency.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">F1 Route Optimizer</p>
                <p className="text-sm italic">React.js, Node.js, Express.js</p>
                <ul className="list-disc list-inside text-sm space-y-1 mt-1">
                  <li>Reduced route calculation time by 70% using permutation-based optimization.</li>
                  <li>Handled 50+ requests/sec with &lt;200ms response time during load testing.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Online Voting System</p>
                <p className="text-sm italic">HTML, CSS, PHP, MySQL</p>
                <ul className="list-disc list-inside text-sm space-y-1 mt-1">
                  <li>Developed a secure voting platform that processed 100+ votes during test deployments.</li>
                  <li>Reduced vote processing time by 60%, ensuring real-time vote updates.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold border-b border-gray-300 mb-2">EDUCATION</h2>
            <div>
              <p className="font-semibold">SRM University</p>
              <p className="text-sm italic">B.Tech, CSE</p>
              <p className="text-sm">Graduation Date: July, 2026</p>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Career Point</p>
              <p className="text-sm italic">MPC Secondary Education</p>
              <p className="text-sm">Graduation Date: July, 2022</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold border-b border-gray-300 mb-2">SKILLS</h2>
            <p className="text-sm">
              <strong>Languages:</strong> Java, C/C++, Python, JavaScript, SQL, Bash<br />
              <strong>Frameworks:</strong> Node.js, Express.js, Scikit, TensorFlow, Django<br />
              <strong>Libraries:</strong> React, Next.js, MongoDB, pandas, NumPy, Matplotlib, Scikit-learn<br />
              <strong>Tools:</strong> GIT, PostgreSQL, MySQL
            </p>
          </div>
        </div>
      </div>
    </Window>
  );
}
