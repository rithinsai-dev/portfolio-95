import { Folder } from "lucide-react";
import { useWindows } from "@/components/window-context";

interface Project {
  name: string;
  repoUrl: string;
}

const projects: Project[] = [
  { name: "MNIST Digit Recognition Model", repoUrl: "https://github.com/rithinsai-dev/MNIST-Full-Stack" },
  { name: "F1 Route Optimizer", repoUrl: "https://github.com/rithinsai-dev/F1" },
  { name: "Online Voting System", repoUrl: "https://github.com/rithinsai11/online-voting-system" },
  // Add more projects as needed
];

export function ProjectFolder() {
  const { addWindow } = useWindows();

  const openProjectsWindow = () => {
    addWindow({
      title: "My Projects",
      content: "projects",
      component: (
        <div className="p-4 space-y-4">
          <h2 className="text-xl font-bold mb-4">My GitHub Projects</h2>
          <div className="grid grid-cols-2 gap-4">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-2 rounded hover:bg-gray-200"
              >
                <Folder className="h-12 w-12 text-yellow-300" />
                <span className="text-sm">{project.name}</span>
              </a>
            ))}
          </div>
        </div>
      ),
    });
  };

  return (
    <button
      onClick={openProjectsWindow}
      className="flex flex-col items-center gap-1 p-2 rounded hover:bg-white/10 focus:bg-white/10"
    >
      <Folder className="h-12 w-12 text-yellow-300" />
      <span className="text-white text-sm">My Projects</span>
    </button>
  );
}
