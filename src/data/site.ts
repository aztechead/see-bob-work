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
  name: "seebobwork",
  title: "Christopher Bobrowitz - Enterprise Engineering Leader | seebobwork",
  description: "Enterprise engineering leader with a passion for building scalable solutions and winning teams.",
  hero: {
    name: "Christopher Bobrowitz",
    tagline: "Enterprise engineering leader with a passion for building scalable solutions and winning teams.",
    ctaPrimary: "View Experience",
    ctaSecondary: "Get in Touch"
  },
  about: {
    title: "About Me",
    description: "I'm a senior engineering leader with extensive experience in building robust, scalable applications that drive business value. My expertise spans across the automotive, airline, and satellite industries. Throughout my career, I've collaborated with cross-functional teams to deliver high-impact solutions that meet complex business requirements while maintaining code quality and system reliability.",
    skills: [
      { name: "Engineering Leadership", level: 92 },
      { name: "Platform Architecture", level: 89 },
      { name: "Digital Transformation", level: 80 },
      { name: "AI Toolsets", level: 76 }
    ]
  },
  contact: {
    title: "Get In Touch",
    subtitle: "I'm always interested in new opportunities and collaborations. Let's connect!",
    email: "chris.bobrowitz@gmail.com",
    location: "Remote, United States",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/christopherbobrowitz/",
        icon: "linkedin"
      },
      {
        name: "GitHub",
        url: "https://github.com/aztechead/see-bob-work",
        icon: "github"
      }
    ]
  }
};
