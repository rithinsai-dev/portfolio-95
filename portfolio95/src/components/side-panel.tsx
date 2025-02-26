import { Github, Instagram, Linkedin, Mail, FileText, MessageSquare } from "lucide-react";

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SidePanel({ isOpen, onClose }: SidePanelProps) {
  const links = [
    { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "https://www.instagram.com/rithin.sai?igsh=amx3YXdxeDV0azFq&utm_source=qr" },
    { icon: <MessageSquare className="h-5 w-5" />, label: "Reddit", href: "https://reddit.com/" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/rithinsai-dev/" },
    { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com/rithinsai-dev" },
    { icon: <FileText className="h-5 w-5" />, label: "Résumé", href: "/Rithin_SDE (4).pdf", target: "_blank" },
    { icon: <Mail className="h-5 w-5" />, label: "Mail", href: "mailto:Rithinsai.pamerla@gmail.com" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0" onClick={onClose}>
      <div
        className="absolute left-0 bottom-10 w-64 bg-gray-200 border-2 border-gray-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 space-y-2">
          {links.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              target={link.target || "_self"} 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-300"
            >
              {link.icon}
              <span className="text-sm">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
