import { Experience } from '@/data/experience';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="portfolio-card h-full p-6">
      <header className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">{experience.period}</p>
        <h3 className="mt-2 text-xl font-semibold text-[var(--color-text)]">{experience.title}</h3>
        <p className="text-sm font-medium text-[var(--color-primary)]">{experience.company}</p>
      </header>

      <p className="text-sm leading-6 text-[var(--color-muted)]">{experience.summary}</p>

      <details className="mt-5">
        <summary className="cursor-pointer text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]">
          View achievements
        </summary>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--color-muted)]">
          {experience.details.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" aria-hidden="true" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </details>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">Technologies</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {experience.details.technologies.map((tech, index) => (
            <span key={index} className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-3 py-1 text-xs font-medium text-[var(--color-text)]">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">Business Impact</p>
        <p className="mt-2 text-sm leading-6 text-[var(--color-text)]">{experience.details.impact}</p>
      </div>
    </article>
  );
}
