# Aztechead's Outie Portfolio - seebobwork

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a markdown-based resume system for easy content management.


## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
# Clone the repository
git clone <your-repo>
cd see-bob-work

# Install dependencies
npm install

# Start development server
npm run dev
```

### Content Management

#### 1. Update Your Resume
Edit `src/data/resume.md` - this is your single source of truth:

```markdown
# Random Person - Enterprise Software Engineer

## Contact
- **Email**: bob@seebobwork.com
- **Location**: Somewhere, Universe

## Experience

### Senior Software Engineer
**Company Name** | 2022 - Present

Description of your role...

#### Key Achievements
- Achievement 1
- Achievement 2

#### Technologies
React, Node.js, AWS

#### Impact
Quantified impact of your work...
```

#### 2. Generate Data Files
After updating `resume.md`, run the parser:

```bash
npm run parse-resume
```

This automatically generates:
- `src/data/experience.ts` - Work experience data
- `src/data/skills.ts` - Skills and proficiency levels  
- `src/data/contact.ts` - Contact information

#### 3. View Changes
The website automatically uses the generated data files, so your changes appear immediately.

## 🎨 Customization

### Styling
- **Colors**: Modify Tailwind classes in components
- **Animations**: Edit `src/app/globals.css` for custom animations
- **Layout**: Update component structure in `src/app/page.tsx`

### Content
- **Site Config**: Edit `src/data/site.ts` for site-wide settings
- **Resume**: Edit `src/data/resume.md` for all content
- **Assets**: Replace `public/pixel-desk.png` with your own images

## 📄 Resume System

### Markdown Format
The resume parser expects this structure:

```markdown
### Job Title
**Company** | Period

Summary description...

#### Key Achievements
- Achievement 1
- Achievement 2

#### Technologies
Tech1, Tech2, Tech3

#### Impact
Quantified impact statement...
```

### Skills Format
```markdown
- **Skill Name**: 85%
```

### Contact Format
```markdown
- **Email**: your@email.com
- **Location**: City, State
- **LinkedIn**: [linkedin.com/in/username](url)
- **GitHub**: [github.com/username](url)
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!
