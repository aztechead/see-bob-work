import { marked } from 'marked';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  marked.setOptions({
    breaks: true,
    gfm: true,
    async: false
  });

  const htmlContent = marked.parse(content) as string;

  return (
    <div 
      className={`prose prose-lg dark:prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
