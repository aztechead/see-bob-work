import Link from 'next/link';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { resumeContent } from '@/data/resume-content';

export default function ResumePage() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="content-container">
          <nav className="flex h-20 items-center justify-between" aria-label="Resume navigation">
            <Link href="/" className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text)]">
              seebobwork
            </Link>
            <Link href="/" className="btn btn-secondary">
              Back to Portfolio
            </Link>
          </nav>
        </div>
      </header>

      <main className="section-block py-12 sm:py-16">
        <div className="content-container">
          <article className="portfolio-card p-6 sm:p-10">
            <MarkdownRenderer content={resumeContent} className="resume-content" />
          </article>
        </div>
      </main>
    </div>
  );
}
