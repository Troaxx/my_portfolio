import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { ExternalLink, BookMarked, FolderGit2, X, ChevronLeft, ChevronRight, Layers, Trophy } from 'lucide-react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Card } from "@/components/ui/card";
import { ThinScrollbar } from './ThinScrollbar';

interface ProjectFeature {
  label: string;
  description: string;
  image?: string;
}

interface StoryParagraph {
  text: string;
  emphasis?: 'bold' | 'italic';
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  instagramUrl?: string;
  type: string;
  image?: string;
  story?: StoryParagraph[];
  features?: ProjectFeature[];
  learningTakeaways?: string[];
}

const resolvePath = (path: string) => {
  return path.startsWith('http') ? path : `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
};

const projects: Project[] = [
  {
    title: 'Sonar',
    description: 'Built a Discord Bot that reads Reddit stories in voice chat. Currently reaching over 7k+ users.',
    tech: ['Discord.js', 'TypeScript', 'Next.js'],
    liveDemoUrl: 'https://sonar-bot.vercel.app/',
    type: 'Product',
  },
  {
    title: 'OCBC Ignite Challenge 2025',
    description: 'Category Winner: Pitched meaningful dashboard insights to reduce manual testing overhead. Custom Playwright cross-browser automation. Unable to show a demo due to company confidentiality.',
    tech: ['Playwright', 'Jenkins', 'React'],
    type: 'Hackathon',
    image: resolvePath('/project-images/ocbc-ignite.png'),
    instagramUrl: 'https://www.instagram.com/p/DRtIpBTEnXz/',
    story: [
      { text: 'Problem Statement: Enable cross platform browsers automation', emphasis: 'bold' },
      { text: "With the growing number of applications in the bank, the test cases will increase. How do we develop a scalable and user-friendly platform to run these test cases automatically without users' manual intervention?" },
      { text: 'Note: Images of this project are not posted intentionally to maintain confidentiality.', emphasis: 'italic' },
    ],
    features: [
      { label: 'Playwright (E2E Testing)', description: 'Utilized to automate interactions across Chromium, Firefox, and WebKit engines, ensuring consistent performance for all users.' },
      { label: 'Istanbul (nyc)', description: 'Integrated to track code coverage, ensuring tests exercise the critical logic of the application.' },
      { label: 'CI/CD Pipeline (Jenkins)', description: 'Fully automated pipeline that triggers builds on main branch pushes, executes Playwright tests, and updates the dashboard.' },
      { label: 'CI/CD Dashboard', description: 'Visualizes test execution status, duration trends, and failure rates by browser.' },
      { label: 'Email Notifications', description: 'Automated alerts sent to the recipient list whenever a build succeeds or fails, providing real-time feedback.' },
      { label: 'Comprehensive Test Suite', description: 'Robust testing covering Authentication, Client Management (CRUD), Transactions, and Fund Transfers.' },
    ],
    learningTakeaways: [
      'Category Winner of OCBC Ignite Challenge 2025',
      'Developed automated cross-browser testing using Playwright',
      'Implemented Jenkins CI/CD pipeline for automated reporting',
      'Integrated Istanbul (nyc) for code coverage analysis',
    ],
  },
  {
    title: 'AURA - Wealth Management',
    description: 'A comprehensive wealth management platform serving High Net Worth Individuals (HNWIs) with an AI chatbot companion, jargon translator, life map coach and legacy planner.',
    tech: ['TypeScript', 'React Native', 'AI'],
    githubUrl: 'https://github.com/Troaxx/aura',
    liveDemoUrl: 'https://aura-teamtweaking.netlify.app/',
    type: 'Hackathon',
    image: resolvePath('/aura-header.png'),
    features: [
      { label: 'Financial Products Overview', description: 'An unbiased and holistic view of their financial solutions.' },
      { label: 'Legacy Planner', description: 'Structure long-term estate and succession planning.' },
      { label: 'Jargon Translator', description: 'Breaks down complex financial terminology into simple, accessible explanations.' },
      { label: 'Life Map', description: 'Goal-based generational planning.' },
      { label: 'Private Vault', description: 'A secure and encrypted overview of all assets held across multiple institutions.' },
      { label: 'AI Chatbot Companion', description: 'An always-available assistant that interprets contextualised statements and UBS-specific insights.', image: resolvePath('/aura-features.png') },
    ],
    learningTakeaways: [
      'Built a comprehensive wealth management platform serving HNWIs',
      'Proposed Personal Online Datastore (POD) integration for multi-bank data consolidation',
      'Developed AI-powered chatbot companion for financial insights',
      'Created features including Legacy Planner, Life Map, and Private Vault',
      'Collaborated with Team Tweaking under PolyFinTechAPI100 2025 hackathon',
    ],
  },
  {
    title: 'Hello Japan - KOSEN Camp',
    description: 'A mobile-first web application addressing Japan overtourism through smart technology and dynamic pricing.',
    tech: ['TypeScript', 'React'],
    githubUrl: 'https://github.com/Troaxx/KOSEN-Global-Camp-A3',
    liveDemoUrl: 'https://kosena3.netlify.app/',
    type: 'Hackathon',
    image: resolvePath('/hello-japan.png'),
    learningTakeaways: [
      'Collaborated internationally with team members from Japan (Kyushu KOSENs), Thailand, and Singapore',
      'Built features including dynamic pricing based on crowd levels to distribute tourist flow',
      'Developed Japanese etiquette guide and voice command system for tourist communication',
      'Created mobile-optimized web application deployed on Netlify within 3 days',
      'Enhanced cross-cultural collaboration and React/TypeScript skills',
    ],
  },
  {
    title: 'Hospital Readmission Predictor',
    description: 'ML system predicting 30-day hospital readmission risk in diabetic patients, built around a 200:1 asymmetric cost model and deployed as an interactive clinical tool.',
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas'],
    githubUrl: 'https://github.com/Troaxx/mldp',
    liveDemoUrl: 'https://bmeq9mmb7pngrvgm4if4hk.streamlit.app/',
    type: 'Personal',
    story: [
      { text: 'Applied machine learning engineering project for the Machine Learning for Developers module at Temasek Polytechnic, using the UCI Diabetes 130-US Hospitals dataset (101,766 encounters).', emphasis: 'bold' },
      { text: "Framed as a binary classification problem: flagging diabetic patients at high risk of readmission within 30 days of discharge. Because a missed at-risk patient costs roughly 200x more than a false alarm ($15,000 emergency readmission vs. $75 preventive outreach), the project prioritized recall over raw accuracy, and selected Logistic Regression with class weighting over ensemble models after they collapsed to near-zero recall on the imbalanced dataset." },
    ],
    features: [
      { label: 'Asymmetric Cost-Driven Modeling', description: 'Framed the classification threshold around a 200:1 cost ratio between missed readmissions and false-alarm outreach, prioritizing recall over accuracy.' },
      { label: 'Feature Engineering & Filtering', description: 'Engineered compound clinical features (service utilization, diagnosis complexity) and filtered 23 medication columns down to 11 statistically and clinically justified predictors.' },
      { label: 'Unsupervised Patient Segmentation', description: 'Applied PCA and K-Means to derive latent patient risk archetypes as meta-features for the supervised model.' },
      { label: 'Threshold Calibration', description: 'Lowered the decision threshold from 0.50 to 0.40 to boost recall from ~50% to ~62%, capturing significantly more at-risk patients.' },
      { label: 'Fairness Audit', description: 'Verified the model showed no meaningful recall disparity across gender (50.8% vs 49.6%), confirming demographic equity.' },
    ],
    learningTakeaways: [
      'Selected Logistic Regression over Random Forest and Gradient Boosting after ensemble methods collapsed to under 2% recall on the imbalanced dataset',
      'Achieved 50.2% test recall and 0.64 ROC-AUC, consistent with validation performance (no overfitting)',
      'Identified that flagging the top 40% of risk-scored patients captures over 70% of all readmissions',
      'Conducted failure mode analysis to identify "silent risk" patients missed by the model',
      'Deployed the model as an interactive Streamlit clinical decision-support tool',
    ],
  },
];

const techColors: Record<string, string> = {
  'TypeScript': '#3178c6',
  'React': '#61dafb',
  'React Native': '#61dafb',
  'Node.js': '#68a063',
  'Python': '#3572A5',
  'Playwright': '#2e8b57',
  'Jenkins': '#d33833',
};

export const Projects: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedProject = selectedIndex !== null ? projects[selectedIndex] : null;

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % projects.length));
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + projects.length) % projects.length));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-zinc-800/50 pb-4 h-[38px]">
        <div>
          <h2 className="text-sm font-semibold tracking-widest text-zinc-100 uppercase">Projects</h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Featured Work</p>
        </div>
      </div>

      <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-6 text-zinc-100">
          <GitHubIcon fontSize="small" />
          <span className="font-semibold uppercase tracking-widest text-sm">GitHub</span>
        </div>
        <ThinScrollbar direction="x" className="pb-2 flex justify-center">
          <GitHubCalendar
            username="Troaxx"
            colorScheme="dark"
            blockSize={14}
            blockMargin={5}
            fontSize={14}
            theme={{
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
            }}
          />
        </ThinScrollbar>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className="bg-zinc-900/30 border-zinc-800/50 hover:bg-zinc-900/60 hover:border-zinc-700/50 transition-all duration-300 p-5 flex flex-col justify-between group rounded-lg cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <BookMarked className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                  <h3 className="text-base font-semibold text-blue-400">{project.title}</h3>
                </div>
                <div className="flex gap-3 text-zinc-500">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-zinc-300 transition-colors pt-1">
                      <GitHubIcon fontSize="small" />
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-zinc-300 transition-colors pt-1">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed font-light line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-zinc-500 font-medium tracking-wide">
              {project.tech.map((t, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: techColors[t] || '#888' }} />
                  <span>{t}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5 ml-auto text-zinc-600">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>{project.type}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-100 transition-colors p-2"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div
            className="w-full max-w-2xl bg-[#121212] border border-zinc-800/80 rounded-xl shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <ThinScrollbar direction="y" className="max-h-[85vh] p-6">
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center flex-wrap gap-3 mb-4 pr-8">
                <h3 className="text-xl font-semibold text-zinc-100">{selectedProject.title}</h3>
                <span className="px-2 py-0.5 rounded-full border border-zinc-800 text-zinc-400 bg-zinc-900/50 text-[10px] font-mono tracking-wider uppercase">
                  {selectedProject.type}
                </span>
              </div>

              {selectedProject.image && (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full rounded-lg mb-6 object-cover"
                />
              )}

              {selectedProject.story ? (
                <div className="space-y-4 mb-6">
                  {selectedProject.story.map((p, i) => (
                    <p
                      key={i}
                      className={`text-sm leading-relaxed ${
                        p.emphasis === 'bold'
                          ? 'font-semibold text-zinc-200'
                          : p.emphasis === 'italic'
                          ? 'italic text-zinc-500'
                          : 'text-zinc-400'
                      }`}
                    >
                      {p.text}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>
              )}

              {selectedProject.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-full border border-zinc-800 text-zinc-400 bg-zinc-900/50 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="mb-10">
                  <h4 className="flex items-center gap-2 text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-5">
                    <Layers className="w-4 h-4" /> Key Features
                  </h4>
                  <ul className="space-y-4">
                    {selectedProject.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-[7px] w-1 h-1 rounded-full bg-zinc-500 shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm text-zinc-400 leading-relaxed">
                            <span className="font-semibold text-zinc-200">{f.label}: </span>
                            {f.description}
                          </p>
                          {f.image && (
                            <img src={f.image} alt={f.label} className="w-full rounded-lg mt-3 object-cover" />
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.learningTakeaways && selectedProject.learningTakeaways.length > 0 && (
                <div className="mb-8">
                  <h4 className="flex items-center gap-2 text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-5">
                    <Trophy className="w-4 h-4" /> Key Takeaways
                  </h4>
                  <ul className="space-y-4">
                    {selectedProject.learningTakeaways.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                        <span className="mt-[7px] w-1 h-1 rounded-full bg-zinc-500 shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(selectedProject.githubUrl || selectedProject.liveDemoUrl || selectedProject.instagramUrl) && (
                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-zinc-800/50">
                  {selectedProject.githubUrl && (
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">
                      <GitHubIcon fontSize="small" /> Code
                    </a>
                  )}
                  {selectedProject.liveDemoUrl && (
                    <a href={selectedProject.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">
                      <ExternalLink className="w-4 h-4" /> View It Live
                    </a>
                  )}
                  {selectedProject.instagramUrl && (
                    <a href={selectedProject.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">
                      <InstagramIcon fontSize="small" /> Post
                    </a>
                  )}
                </div>
              )}
            </ThinScrollbar>
          </div>

          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-100 transition-colors p-2"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  );
};
