"use client";

import { marked } from 'marked';
import { useEffect, useState } from 'react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Configure marked options
    marked.setOptions({
      breaks: true,
      gfm: true,
    });

    // Convert markdown to HTML
    const convertMarkdown = async () => {
      const html = await marked(content);
      setHtmlContent(html);
    };
    
    convertMarkdown();
  }, [content]);

  return (
    <div 
      className={`prose prose-lg dark:prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      style={{
        // Custom styles for better markdown rendering
        '--tw-prose-body': 'rgb(71 85 105)',
        '--tw-prose-headings': 'rgb(15 23 42)',
        '--tw-prose-links': 'rgb(59 130 246)',
        '--tw-prose-bold': 'rgb(15 23 42)',
        '--tw-prose-counters': 'rgb(100 116 139)',
        '--tw-prose-bullets': 'rgb(203 213 225)',
        '--tw-prose-hr': 'rgb(226 232 240)',
        '--tw-prose-quotes': 'rgb(15 23 42)',
        '--tw-prose-quote-borders': 'rgb(226 232 240)',
        '--tw-prose-captions': 'rgb(100 116 139)',
        '--tw-prose-code': 'rgb(15 23 42)',
        '--tw-prose-pre-code': 'rgb(248 250 252)',
        '--tw-prose-pre-bg': 'rgb(15 23 42)',
        '--tw-prose-th-borders': 'rgb(203 213 225)',
        '--tw-prose-td-borders': 'rgb(226 232 240)',
      } as React.CSSProperties}
    />
  );
}
