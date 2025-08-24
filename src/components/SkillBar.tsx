interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

export default function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  return (
    <div className={`flex items-center justify-between animate-progress ${delay > 0 ? `animation-delay-${delay}` : ''}`}>
      <span className="text-slate-700 dark:text-slate-300">{name}</span>
      <div className="w-32 bg-slate-200 dark:bg-slate-600 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full animate-fill-bar"
          style={{ 
            '--target-width': `${level}%`
          } as React.CSSProperties}
        ></div>
      </div>
    </div>
  );
}
