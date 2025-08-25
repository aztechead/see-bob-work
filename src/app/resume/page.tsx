"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default function ResumePage() {
  const [resumeContent, setResumeContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await fetch('/api/resume');
        if (response.ok) {
          const content = await response.text();
          setResumeContent(content);
        } else {
          throw new Error('Failed to load resume');
        }
      } catch (error) {
        console.error('Error loading resume:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResume();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300">Loading resume...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
          <MarkdownRenderer 
            content={resumeContent}
            className="resume-content"
          />
        </div>
      </div>
    </div>
  );
}
