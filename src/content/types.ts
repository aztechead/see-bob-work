export interface SiteContent {
  site: {
    name: string;
    title: string;
    description: string;
  };
  navigation: {
    links: Array<{
      label: string;
      href: string;
    }>;
    resumeLabel: string;
  };
  hero: {
    name: string;
    headline: string;
    tagline: string;
    availability: string;
    ctaPrimary: {
      label: string;
      href: string;
    };
    ctaSecondary: {
      label: string;
      href: string;
    };
    ctaTertiary: {
      label: string;
      href: string;
    };
  };
  trustSignals: Array<{
    value: string;
    label: string;
    detail: string;
  }>;
  impact: {
    title: string;
    subtitle: string;
    highlights: Array<{
      value: string;
      title: string;
      description: string;
    }>;
  };
  currentWork: {
    title: string;
    subtitle: string;
    projects: Array<{
      value: string;
      title: string;
      description: string;
    }>;
  };
  about: {
    title: string;
    description: string;
  };
  philosophyTitle: string;
  philosophy: Array<{
    title: string;
    icon: string;
    content: string;
  }>;
  industries: Array<{
    name: string;
    icon: string;
  }>;
  contact: {
    title: string;
    subtitle: string;
    availability: string;
    email: string;
    location: string;
    social: Array<{
      name: string;
      url: string;
      icon: string;
    }>;
  };
}
