import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const resumePath = path.join(process.cwd(), 'src/data/resume.md');
    const resumeContent = fs.readFileSync(resumePath, 'utf8');
    
    return new NextResponse(resumeContent, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Error reading resume:', error);
    return NextResponse.json(
      { error: 'Failed to load resume' },
      { status: 500 }
    );
  }
}
