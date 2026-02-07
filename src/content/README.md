# Content Management

This directory contains all site content in a centralized JSON file for easy management and future CMS migration.

## Files

- **content.json** - Main content file containing all site text, labels, and configuration
- **types.ts** - TypeScript interfaces for type-safe content access

## Content Structure

### Site Metadata
```json
{
  "site": {
    "name": "Site name",
    "title": "Page title (SEO)",
    "description": "Meta description"
  }
}
```

### Hero Section
```json
{
  "hero": {
    "name": "Your name",
    "tagline": "Professional tagline",
    "availability": "Availability status",
    "ctaPrimary": "Primary button text",
    "ctaSecondary": "Secondary button text",
    "ctaTertiary": "Tertiary button text"
  }
}
```

### About Section
```json
{
  "about": {
    "title": "Section title",
    "description": "About text"
  }
}
```

### Philosophy Section
Array of principles:
```json
{
  "philosophy": [
    {
      "title": "Principle title",
      "icon": "lightning|rocket|heart",
      "content": "Principle description"
    }
  ]
}
```

### Industries
Array of industry badges:
```json
{
  "industries": [
    {
      "name": "Industry name",
      "icon": "car|plane|satellite"
    }
  ]
}
```

### Contact Section
```json
{
  "contact": {
    "title": "Section title",
    "subtitle": "Section subtitle",
    "availability": "Availability message",
    "email": "your@email.com",
    "location": "Your location",
    "social": [
      {
        "name": "Platform name",
        "url": "Profile URL",
        "icon": "linkedin|github"
      }
    ]
  }
}
```

## Usage

Import the content in your components:

```tsx
import content from '@/content/content.json';
import type { SiteContent } from '@/content/types';

const siteContent = content as SiteContent;

// Use in component
<h1>{siteContent.hero.name}</h1>
```

## Benefits

- ✅ **Single source of truth** - All content in one file
- ✅ **Type-safe** - TypeScript interfaces catch errors
- ✅ **Hot reload** - Changes reflect immediately in dev
- ✅ **Zero dependencies** - No build scripts or parsers needed
- ✅ **CMS-ready** - Easy to migrate to Contentful, Sanity, etc.
- ✅ **Cloudflare Pages compatible** - Works with edge runtime

## Migrating to CMS

When ready to move to a headless CMS:

1. Keep the same TypeScript interfaces in `types.ts`
2. Replace JSON import with CMS API calls
3. Components remain unchanged - they just receive data from a different source

Example with Contentful:
```tsx
// Instead of:
import content from '@/content/content.json';

// Use:
const content = await fetchFromContentful();
// Returns same SiteContent structure
```
