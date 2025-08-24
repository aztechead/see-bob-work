"use client";

import { Experience } from '@/data/experience';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isFlipped: boolean;
  onToggle: (index: number) => void;
}

export default function ExperienceCard({ experience, index, isFlipped, onToggle }: ExperienceCardProps) {
  return (
    <div
      className={`flip-card-container ${isFlipped ? 'flipped' : ''}`}
      onClick={() => onToggle(index)}
    >
      <div className="flip-card">
        {/* Front of Card */}
        <div className="flip-card-front bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{experience.title}</h3>
            <p className="text-blue-600 dark:text-blue-400 mb-2">{experience.company}</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{experience.period}</p>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{experience.summary}</p>
            <div className="mt-6 text-blue-600 dark:text-blue-400 text-sm font-medium">
              Click to see more →
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="flip-card-back bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 cursor-pointer transition-all duration-500 hover:-translate-y-2">
          <div className="h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{experience.title}</h3>
                <p className="text-blue-600 dark:text-blue-400">{experience.company}</p>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle(index);
                }}
                className="w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded-full flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors"
              >
                <svg className="w-4 h-4 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 space-y-6">
              {/* Key Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {experience.details.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-slate-600 dark:text-slate-300 flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.details.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Impact</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {experience.details.impact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
