import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Search, X, Briefcase, Code } from 'lucide-react';
import { ThinScrollbar } from './ThinScrollbar';

interface ExperienceItem {
  role: string;
  company: string;
  date: string;
}

interface ProjectItem {
  name: string;
  description: string;
  isClickable: boolean;
  url?: string;
}

interface Skill {
  name: string;
  categories: string[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
}

const categories = ["FEATURED", "ALL", "AI/ML", "API", "DATABASE", "DEVOPS", "FRAMEWORKS", "LANGUAGES", "PLATFORMS"];

const skillsData: Skill[] = [
  {
    name: "Spring Boot",
    categories: ["FRAMEWORKS", "FEATURED"],
    experiences: [
      { role: "Software Engineer Intern", company: "OCBC / BOS Singapore", date: "Mar 2026 – Current" },
    ],
    projects: []
  },
  {
    name: "AWS",
    categories: ["PLATFORMS", "FEATURED"],
    experiences: [],
    projects: []
  },
  {
    name: "Java",
    categories: ["LANGUAGES", "FEATURED"],
    experiences: [
      { role: "Software Engineer Intern", company: "OCBC / BOS Singapore", date: "Mar 2026 – Current" },
    ],
    projects: []
  },
  {
    name: "TypeScript",
    categories: ["LANGUAGES", "FEATURED"],
    experiences: [
      { role: "Lead Developer", company: "Eventas Asia LLP", date: "2023 – Present" },
    ],
    projects: [
      { name: "AURA - Wealth Management", description: "Comprehensive wealth management platform with AI chatbot companion.", isClickable: true, url: "https://github.com/Troaxx/aura" },
      { name: "Hello Japan - KOSEN Camp", description: "Mobile-first web app addressing Japan overtourism through dynamic pricing.", isClickable: true, url: "https://github.com/Troaxx/KOSEN-Global-Camp-A3" },
    ]
  },
  {
    name: "JavaScript",
    categories: ["LANGUAGES"],
    experiences: [
      { role: "Co-Founder & Lead Developer", company: "Stealth AI Startup", date: "Aug 2025 – Present" },
    ],
    projects: []
  },
  {
    name: "React.js",
    categories: ["FRAMEWORKS", "FEATURED"],
    experiences: [],
    projects: [
      { name: "OCBC Ignite Challenge 2025", description: "Category Winner: dashboard insights to reduce manual testing overhead.", isClickable: false },
      { name: "AURA - Wealth Management", description: "Comprehensive wealth management platform with AI chatbot companion.", isClickable: true, url: "https://github.com/Troaxx/aura" },
      { name: "Hello Japan - KOSEN Camp", description: "Mobile-first web app addressing Japan overtourism through dynamic pricing.", isClickable: true, url: "https://github.com/Troaxx/KOSEN-Global-Camp-A3" },
    ]
  },
  {
    name: "React Native",
    categories: ["FRAMEWORKS"],
    experiences: [],
    projects: [
      { name: "AURA - Wealth Management", description: "Comprehensive wealth management platform with AI chatbot companion.", isClickable: true, url: "https://github.com/Troaxx/aura" },
    ]
  },
  {
    name: "Next.js",
    categories: ["FRAMEWORKS"],
    experiences: [
      { role: "Lead Developer", company: "Eventas Asia LLP", date: "2023 – Present" },
    ],
    projects: []
  },
  {
    name: "Node.js",
    categories: ["LANGUAGES", "API"],
    experiences: [],
    projects: [
      { name: "Synapse - AI Peer Tutoring", description: "AI-powered platform connecting students for peer tutoring at Temasek Polytechnic.", isClickable: true, url: "https://github.com/Troaxx/synapse" },
    ]
  },
  {
    name: "Python",
    categories: ["LANGUAGES", "FEATURED", "AI/ML", "API"],
    experiences: [],
    projects: []
  },
  {
    name: "Tailwind",
    categories: ["FRAMEWORKS"],
    experiences: [],
    projects: []
  },
  {
    name: "PostgreSQL",
    categories: ["DATABASE"],
    experiences: [],
    projects: []
  },
  {
    name: "MongoDB",
    categories: ["DATABASE"],
    experiences: [],
    projects: [
      { name: "Synapse - AI Peer Tutoring", description: "AI-powered platform connecting students for peer tutoring at Temasek Polytechnic.", isClickable: true, url: "https://github.com/Troaxx/synapse" },
    ]
  },
  {
    name: "Git",
    categories: ["DEVOPS"],
    experiences: [],
    projects: []
  },
  {
    name: "Docker",
    categories: ["DEVOPS"],
    experiences: [],
    projects: [
      { name: "DevOps Pipeline", description: "End-to-end CI/CD demonstration using Jenkins, Docker, Kubernetes, and automated testing.", isClickable: true, url: "https://github.com/Troaxx/devops" },
    ]
  },
  {
    name: "Jenkins",
    categories: ["DEVOPS"],
    experiences: [],
    projects: [
      { name: "OCBC Ignite Challenge 2025", description: "Category Winner: dashboard insights to reduce manual testing overhead.", isClickable: false },
      { name: "DevOps Pipeline", description: "End-to-end CI/CD demonstration using Jenkins, Docker, Kubernetes, and automated testing.", isClickable: true, url: "https://github.com/Troaxx/devops" },
    ]
  },
  {
    name: "Playwright",
    categories: ["FRAMEWORKS"],
    experiences: [],
    projects: [
      { name: "OCBC Ignite Challenge 2025", description: "Category Winner: custom Playwright cross-browser automation.", isClickable: false },
    ]
  },
  {
    name: "CI/CD",
    categories: ["DEVOPS"],
    experiences: [
      { role: "Lead Developer", company: "Eventas Asia LLP", date: "2023 – Present" },
    ],
    projects: []
  },
  {
    name: "HTML",
    categories: ["LANGUAGES"],
    experiences: [
      { role: "Co-Founder & Lead Developer", company: "Stealth AI Startup", date: "Aug 2025 – Present" },
    ],
    projects: []
  },
  {
    name: "CSS",
    categories: ["LANGUAGES"],
    experiences: [
      { role: "Co-Founder & Lead Developer", company: "Stealth AI Startup", date: "Aug 2025 – Present" },
    ],
    projects: []
  },
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState("FEATURED");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const filteredSkills = skillsData.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "ALL" || activeTab === "FEATURED" || skill.categories.includes(activeTab);
    const isFeatured = activeTab === "FEATURED" ? skill.categories.includes("FEATURED") : true;
    return matchesSearch && matchesTab && isFeatured;
  });

  return (
    <>
      <div className="space-y-6" id="skills">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 h-auto md:h-[38px]">
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-zinc-100 uppercase">Skills</h2>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 bg-transparent border-none focus:outline-none focus:ring-0 pl-9 pr-4 py-1.5 text-sm text-zinc-300 placeholder:text-zinc-600"
            />
          </div>
        </div>

        <ThinScrollbar direction="x" className="flex -mx-4 px-4 md:mx-0 md:px-0 gap-6 border-b border-zinc-800/50 mb-6 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`whitespace-nowrap pb-3 text-xs tracking-widest font-bold uppercase transition-colors relative ${
                activeTab === category
                  ? "text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {category}
              {activeTab === category && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-teal-500" />
              )}
            </button>
          ))}
        </ThinScrollbar>

        <div className="flex flex-wrap gap-4 md:gap-y-4 md:gap-x-5">
          {filteredSkills.map((skill) => {
            const count = skill.experiences.length + skill.projects.length;
            return (
              <Badge
                key={skill.name}
                variant="secondary"
                onClick={() => setSelectedSkill(skill)}
                className="cursor-pointer flex items-center justify-between gap-3 pl-5 pr-2 py-6 bg-transparent border border-zinc-800 hover:bg-zinc-900/50 transition-all text-[14px] font-medium text-zinc-200 rounded-full shadow-none"
              >
                <span>{skill.name}</span>
                <span className="flex items-center justify-center bg-zinc-800 text-zinc-500 text-[12px] font-medium rounded-full min-w-[28px] h-[28px]">
                  {count}
                </span>
              </Badge>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedSkill(null)}>
          <div
            className="w-full max-w-lg bg-[#121212] border border-zinc-800/80 rounded-xl shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <ThinScrollbar direction="y" className="max-h-[80vh] p-6">
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center flex-wrap gap-3 mb-6">
                <h3 className="text-xl font-semibold text-zinc-100">{selectedSkill.name}</h3>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono tracking-wider">
                  {selectedSkill.categories.map(cat => (
                    <span key={cat} className="px-2 py-0.5 rounded-full border border-zinc-800 text-zinc-400 bg-zinc-900/50">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                {selectedSkill.experiences.length > 0 && (
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
                      <Briefcase className="w-4 h-4" /> EXPERIENCE
                    </h4>
                    <div className="space-y-5">
                      {selectedSkill.experiences.map((exp, idx) => (
                        <div key={idx} className="group cursor-pointer">
                          <div className="flex justify-between items-center mb-1">
                            <p className="text-sm font-medium text-zinc-200">{exp.role}</p>
                            <span className="text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                          </div>
                          <p className="text-xs text-zinc-500">{exp.company} • {exp.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedSkill.projects.length > 0 && (
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
                      <Code className="w-4 h-4" /> PROJECTS
                    </h4>
                    <div className="space-y-5">
                      {selectedSkill.projects.map((proj, idx) => (
                        proj.isClickable && proj.url ? (
                          <a
                            key={idx}
                            href={proj.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col gap-0.5 hover:opacity-80 transition-opacity"
                          >
                            <div className="flex justify-between items-center">
                              <p className="text-sm font-medium text-blue-400">{proj.name}</p>
                              <span className="text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity text-xs">↗</span>
                            </div>
                            <p className="text-xs text-zinc-500">{proj.description}</p>
                          </a>
                        ) : (
                          <div key={idx} className="flex flex-col gap-0.5">
                            <p className="text-sm font-medium text-zinc-300">{proj.name}</p>
                            <p className="text-xs text-zinc-500">{proj.description}</p>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}

                {selectedSkill.experiences.length === 0 && selectedSkill.projects.length === 0 && (
                  <p className="text-sm text-zinc-500 italic mt-4">No experiences or projects mapped yet.</p>
                )}
              </div>
            </ThinScrollbar>
          </div>
        </div>
      )}
    </>
  );
};
