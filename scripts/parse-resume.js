const fs = require('fs');
const path = require('path');

function parseResume() {
  const resumePath = path.join(__dirname, '../src/data/resume.md');
  const outputPath = path.join(__dirname, '../src/data/experience.ts');
  
  const markdown = fs.readFileSync(resumePath, 'utf8');
  
  // Find the experience section
  const experienceSectionStart = markdown.indexOf('## Experience');
  if (experienceSectionStart === -1) {
    console.error('❌ Experience section not found');
    return;
  }
  
  // Find the end of experience section (next ## or end of file)
  const experienceSectionEnd = markdown.indexOf('\n## ', experienceSectionStart + 1);
  const experienceSection = markdown.substring(
    experienceSectionStart, 
    experienceSectionEnd !== -1 ? experienceSectionEnd : markdown.length
  );
  
  // Split into individual experiences and clean up
  const experienceBlocks = experienceSection
    .split('\n---\n')
    .map(block => block.trim())
    .filter(block => block && block.includes('### '));
  
  const experiences = [];
  
  for (const block of experienceBlocks) {
    // Extract title, company, and period
    const titleMatch = block.match(/### (.+?)\n\*\*(.+?)\*\* \| (.+?)\n/);
    if (!titleMatch) continue;
    
    const [, title, company, period] = titleMatch;
    
    // Extract summary (text between period and first ####)
    const summaryMatch = block.match(/\*\*.*?\*\* \| .*?\n\n(.+?)(?=\n#### |$)/s);
    const summary = summaryMatch ? summaryMatch[1].trim() : '';
    
    // Extract achievements
    const achievementsMatch = block.match(/#### Key Achievements\n((?:- .+?\n)+)/);
    const achievements = achievementsMatch 
      ? achievementsMatch[1].split('\n')
          .filter(line => line.trim().startsWith('- '))
          .map(line => line.replace('- ', '').trim())
      : [];
    
    // Extract technologies - look for the line after "#### Technologies"
    const technologiesMatch = block.match(/#### Technologies\n([^\n]+)/);
    const technologies = technologiesMatch 
      ? technologiesMatch[1].trim().split(',').map(tech => tech.trim())
      : [];
    
    // Extract impact
    const impactMatch = block.match(/#### Impact\n(.+?)(?=\n|$)/);
    const impact = impactMatch ? impactMatch[1].trim() : '';
    
    experiences.push({
      title: title.trim(),
      company: company.trim(),
      period: period.trim(),
      summary: summary,
      details: {
        achievements,
        technologies,
        impact
      }
    });
  }
  
  // Generate TypeScript file
  const tsContent = `export interface Experience {
  title: string;
  company: string;
  period: string;
  summary: string;
  details: {
    achievements: string[];
    technologies: string[];
    impact: string;
  };
}

export const experienceData: Experience[] = ${JSON.stringify(experiences, null, 2)};
`;

  fs.writeFileSync(outputPath, tsContent);
  console.log(`✅ Experience data generated from resume.md`);
  console.log(`📁 Output: ${outputPath}`);
  console.log(`📊 Parsed ${experiences.length} experiences`);
}

// Parse skills section
function parseSkills() {
  const resumePath = path.join(__dirname, '../src/data/resume.md');
  const outputPath = path.join(__dirname, '../src/data/skills.ts');
  
  const markdown = fs.readFileSync(resumePath, 'utf8');
  
  // Parse core competencies
  const skillsRegex = /- \*\*(.+?)\*\*: (\d+)%/g;
  const skills = [];
  
  let match;
  while ((match = skillsRegex.exec(markdown)) !== null) {
    const [, name, level] = match;
    skills.push({
      name: name.trim(),
      level: parseInt(level)
    });
  }
  
  // Generate TypeScript file
  const tsContent = `export interface Skill {
  name: string;
  level: number;
}

export const skillsData: Skill[] = ${JSON.stringify(skills, null, 2)};
`;

  fs.writeFileSync(outputPath, tsContent);
  console.log(`✅ Skills data generated from resume.md`);
  console.log(`📁 Output: ${outputPath}`);
  console.log(`📊 Parsed ${skills.length} skills`);
}

// Parse contact info
function parseContact() {
  const resumePath = path.join(__dirname, '../src/data/resume.md');
  const outputPath = path.join(__dirname, '../src/data/contact.ts');
  
  const markdown = fs.readFileSync(resumePath, 'utf8');
  
  // Extract contact information
  const emailMatch = markdown.match(/\*\*Email\*\*: (.+)/);
  const locationMatch = markdown.match(/\*\*Location\*\*: (.+)/);
  const linkedinMatch = markdown.match(/\[https:\/\/www\.linkedin\.com\/in\/(.+?)\]\((.+?)\)/);
  const githubMatch = markdown.match(/\[https:\/\/github\.com\/(.+?)\]\((.+?)\)/);
  
  const contact = {
    email: emailMatch ? emailMatch[1].trim() : '',
    location: locationMatch ? locationMatch[1].trim() : '',
    social: []
  };
  
  if (linkedinMatch) {
    contact.social.push({
      name: 'LinkedIn',
      url: linkedinMatch[2],
      icon: 'linkedin'
    });
  }
  
  if (githubMatch) {
    contact.social.push({
      name: 'GitHub',
      url: githubMatch[2],
      icon: 'github'
    });
  }
  
  // Generate TypeScript file
  const tsContent = `export interface Contact {
  email: string;
  location: string;
  social: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export const contactData: Contact = ${JSON.stringify(contact, null, 2)};
`;

  fs.writeFileSync(outputPath, tsContent);
  console.log(`✅ Contact data generated from resume.md`);
  console.log(`📁 Output: ${outputPath}`);
}

// Update resume API route
function updateResumeRoute() {
  const resumePath = path.join(__dirname, '../src/data/resume.md');
  const routePath = path.join(__dirname, '../src/app/api/resume/route.ts');
  
  const markdown = fs.readFileSync(resumePath, 'utf8');
  
  // Escape backticks and template literals for JavaScript string
  const escapedContent = markdown
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');
  
  // Generate the route file content
  const routeContent = `import { NextResponse } from 'next/server';

// Configure for Edge Runtime (required for Cloudflare Pages)
export const runtime = 'edge';

// Import resume content directly - this works in both environments
const resumeContent = \`${escapedContent}\`;

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
`;

  fs.writeFileSync(routePath, routeContent);
  console.log(`✅ Resume API route updated from resume.md`);
  console.log(`📁 Output: ${routePath}`);
}

// Run all parsers
function main() {
  console.log('🔄 Parsing resume.md...\n');
  
  try {
    parseResume();
    parseSkills();
    parseContact();
    updateResumeRoute();
    
    console.log('\n✅ All data files generated successfully!');
    console.log('💡 Run this script whenever you update resume.md');
  } catch (error) {
    console.error('❌ Error parsing resume:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { parseResume, parseSkills, parseContact };
