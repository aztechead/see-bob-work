interface Industry {
  name: string;
  icon: string;
}

interface IndustryBadgesProps {
  industries: Industry[];
}

export default function IndustryBadges({ industries }: IndustryBadgesProps) {
  const iconPaths: Record<string, string> = {
    car: 'M9 17h6M5 11h14M7 17h.01M17 17h.01M7 17a2 2 0 11-4 0v-3a3 3 0 013-3h12a3 3 0 013 3v3a2 2 0 11-4 0',
    plane: 'M2 16l20-4-20-4 4 4-4 4zm8 4l2-8',
    satellite: 'M4 4l6 6m4 4l6 6M8 2l2 2m4 4l2 2M2 8l2 2m4 4l2 2M8 12a4 4 0 015.657 0'
  };

  const iconLabels: Record<string, string> = {
    car: 'Automotive',
    plane: 'Airline',
    satellite: 'Satellite'
  };

  return (
    <ul className="flex flex-wrap gap-3">
      {industries.map((industry) => (
        <li key={industry.name} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text)]">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-surface-alt)] text-[var(--color-primary)]">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={iconPaths[industry.icon] ?? iconPaths.satellite} />
            </svg>
          </span>
          <span>{industry.name}</span>
          <span className="sr-only">{iconLabels[industry.icon] ?? 'Industry'}</span>
        </li>
      ))}
    </ul>
  );
}
