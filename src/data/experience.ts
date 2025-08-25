export interface Experience {
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

export const experienceData: Experience[] = [
  {
    "title": "Lead Platform Architect",
    "company": "Viasat",
    "period": "2025 - Present",
    "summary": "Leading the design and implementation of the technical roadmap for Viasat's entertainment platform servicing airlines and residential customers around the globe.",
    "details": {
      "achievements": [
        "Loading Achievements..."
      ],
      "technologies": [
        "Lost count"
      ],
      "impact": "Ensuring minimum bandwidth utilization, for maximum customer satisfaction."
    }
  },
  {
    "title": "Software Engineering Manager",
    "company": "Viasat",
    "period": "2024-2025",
    "summary": "Led the development team for personalized services within the content delivery platform at Viasat.",
    "details": {
      "achievements": [
        "Shipped bandwidth reducing content personalization engine driven from machine learning.",
        "Developed 2x improvement in user watch engagement.",
        "Provided real-time analytics for data driven decision making.",
        "Researched several AI enabled POC's for traditional ML model replacement."
      ],
      "technologies": [
        "Python",
        "Kafka",
        "Kubernetes",
        "AWS Sagemaker"
      ],
      "impact": "Doubled engagement and reduced bandwidth with ML personalization while enabling real-time insights and advancing AI adoption."
    }
  },
  {
    "title": "Director - Enterprise Analytics",
    "company": "Hawaiian Airlines",
    "period": "2023-2024",
    "summary": "Led adoption of a central data platform for all self-service applications within Hawaiian Airlines enterprise.",
    "details": {
      "achievements": [
        "Delivered central data hub through Snowflake.",
        "Adopted dbt across all development teams for ETL jobs.",
        "Enabled real-time analytics across all self-service applications."
      ],
      "technologies": [
        "Snowflake",
        "DBT",
        "Python",
        "AWS SQS"
      ],
      "impact": "Delivered high value insights through data pipelines and real time analytics for airport and commercial decision making."
    }
  },
  {
    "title": "Senior Architect",
    "company": "Hawaiian Airlines",
    "period": "2021-2023",
    "summary": "Drove technical direction for guest facing applications in Hawaiian Airlines digital experience organization.",
    "details": {
      "achievements": [
        "Directed technical strategy for HA's guest facing applications.",
        "Led migration of the pasenger service system and containerizes APIs on Amazon EKS.",
        "Designed and launched HA's AWS booking engine generating ~$1.3B annually.",
        "Delivered for commit-to-production CI/CD pipeline with Python based testing suite",
        "Created AI driven user behavior models to power dynamic guest experience."
      ],
      "technologies": [
        "Python",
        "Angular",
        "AWS",
        "EKS",
        "AI/ML Models"
      ],
      "impact": "Enabled ~$1.3B in annual revenue while modernizing Hawaiian Airlines digital platform through scalable cloud architectureand automation."
    }
  },
  {
    "title": "Senior SDE",
    "company": "Hawaiian Airlines",
    "period": "2019-2021",
    "summary": "Engineered a smarter passenger experience through automation and cloud services.",
    "details": {
      "achievements": [
        "Led development of HA's global self-service kiosk application.",
        "Built self-service solutions with MongoDB, Mulesoft, and Python Flask APIs.",
        "Authored operational run books and SQL procedures to streamline airport and aftersales systems."
      ],
      "technologies": [
        "Angular",
        "MongoDB",
        "Mulesoft",
        "SQL"
      ],
      "impact": "Modernized airport check-in systems through scalable self-service platforms."
    }
  },
  {
    "title": "Software Developer",
    "company": "General Motors",
    "period": "2015-2019",
    "summary": "Helped deliver efficiency through modernizing legacy IT systems.",
    "details": {
      "achievements": [
        "Modernized full-stack applications supporting customer care and aftersales.",
        "Built Python TensorFlow models for part analytics and distribution optimization.",
        "Designed and implemented data ingestion and transformation pipelines for regression models."
      ],
      "technologies": [
        "Python",
        "Tensorflow",
        "SQL"
      ],
      "impact": "Improved aftersales efficiency and decision making by modernizing applications and deploying AI driven analytics with automated data pipelines."
    }
  }
];
