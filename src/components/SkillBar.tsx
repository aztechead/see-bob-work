interface SkillBarProps {
  name: string;
  level: number;
}

export default function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-[var(--color-text)]">{name}</span>
        <span className="text-[var(--color-muted)]">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-surface-alt)]">
        <div
          className="h-full rounded-full"
          style={{
            width: `${level}%`,
            background: 'linear-gradient(90deg, var(--color-secondary), var(--color-primary))'
          } as React.CSSProperties}
          role="progressbar"
          aria-label={`${name} proficiency`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={level}
        />
      </div>
    </div>
  );
}
