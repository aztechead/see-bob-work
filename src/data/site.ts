import content from '@/content/content.json';
import type { SiteContent } from '@/content/types';
import { skillsData } from '@/data/skills';

const siteContent = content as SiteContent;

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  hero: {
    name: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    description: string;
    skills: {
      name: string;
      level: number;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    location: string;
    social: {
      name: string;
      url: string;
      icon: string;
    }[];
  };
}

export const siteConfig: SiteConfig = {
  name: siteContent.site.name,
  title: siteContent.site.title,
  description: siteContent.site.description,
  hero: {
    name: siteContent.hero.name,
    tagline: siteContent.hero.tagline,
    ctaPrimary: siteContent.hero.ctaPrimary.label,
    ctaSecondary: siteContent.hero.ctaSecondary.label
  },
  about: {
    title: siteContent.about.title,
    description: siteContent.about.description,
    skills: skillsData
  },
  contact: {
    title: siteContent.contact.title,
    subtitle: siteContent.contact.subtitle,
    email: siteContent.contact.email,
    location: siteContent.contact.location,
    social: siteContent.contact.social
  }
};
