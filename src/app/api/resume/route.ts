import { NextResponse } from 'next/server';
import { resumeContent } from '@/data/resume-content';

// Configure for Edge Runtime (required for Cloudflare Pages)
export const runtime = 'edge';

export async function GET() {
  try {
    return new NextResponse(resumeContent, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Error serving resume:', error);
    return NextResponse.json(
      { error: 'Failed to load resume' },
      { status: 500 }
    );
  }
}
