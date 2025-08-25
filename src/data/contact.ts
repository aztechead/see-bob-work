export interface Contact {
  email: string;
  location: string;
  social: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export const contactData: Contact = {
  "email": "chris.bobrowitz@gmail.com",
  "location": "Remote, Planet Earth",
  "social": [
    {
      "name": "LinkedIn",
      "url": "https://www.linkedin.com/in/christopherbobrowitz/",
      "icon": "linkedin"
    },
    {
      "name": "GitHub",
      "url": "https://github.com/aztechead/",
      "icon": "github"
    }
  ]
};
