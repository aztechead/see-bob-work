import { NextResponse } from 'next/server';

// Import resume content directly - this works in both environments
const resumeContent = `# Christopher Bobrowitz - Enterprise Technical Leader

## Contact
- **Email**: chris.bobrowitz@gmail.com
- **Location**: Remote, Planet Earth
- **LinkedIn**: [https://www.linkedin.com/in/christopherbobrowitz/](https://www.linkedin.com/in/christopherbobrowitz/)

## Summary
Enterprise technical leader with robust problem solving skills, exceptional leadership traits, with proven experience. Industry experience in airlines, automotive supply chains, and satellite networks. 

## Experience

### Lead Platform Architect
**Viasat** | 2025 - Present

Leading the design and implementation of the technical roadmap for Viasat's entertainment platform servicing airlines and residential customers around the globe. 

#### Key Achievements
- Loading Achievements...

#### Technologies
Lost count

#### Impact
Ensuring minimum bandwidth utilization, for maximum customer satisfaction.

---

### Software Engineering Manager
**Viasat** | 2024-2025

Led the development team for personalized services within the content delivery platform at Viasat.

#### Key Achievements
- Shipped bandwidth reducing content personalization engine driven from machine learning.
- Developed 2x improvement in user watch engagement.
- Provided real-time analytics for data driven decision making.
- Researched several AI enabled POC's for traditional ML model replacement.

#### Technologies
Python, Kafka, Kubernetes, AWS Sagemaker

#### Impact
Doubled engagement and reduced bandwidth with ML personalization while enabling real-time insights and advancing AI adoption.

---

### Director - Enterprise Analytics
**Hawaiian Airlines** | 2023-2024

Led adoption of a central data platform for all self-service applications within Hawaiian Airlines enterprise.

#### Key Achievements
- Delivered central data hub through Snowflake.
- Adopted dbt across all development teams for ETL jobs.
- Enabled real-time analytics across all self-service applications.

#### Technologies
Snowflake, DBT, Python, AWS SQS

#### Impact
Delivered high value insights through data pipelines and real time analytics for airport and commercial decision making.

---

### Senior Architect
**Hawaiian Airlines** | 2021-2023

Drove technical direction for guest facing applications in Hawaiian Airlines digital experience organization.

#### Key Achievements
- Directed technical strategy for HA's guest facing applications.
- Led migration of the pasenger service system and containerizes APIs on Amazon EKS.
- Designed and launched HA's AWS booking engine generating ~$1.3B annually.
- Delivered for commit-to-production CI/CD pipeline with Python based testing suite
- Createds AI driven user behavior models to power dynamic guest experience. 

#### Technologies
Python, Angular, AWS, EKS, AI/ML Models

#### Impact
Enabled ~$1.3B in annual revenue while modernizing Hawaiian Airlines digital platform through scalable cloud architectureand automation.

---

### Senior SDE
**Hawaiian Airlines** | 2019-2021

Engineered a smarter passenger experience through automation and cloud services.

#### Key Achievements
- Led development of HA's global self-service kiosk application.
- Built self-service solutions with MongoDB, Mulesoft, and Python Flask APIs.
- Authored operational run books and SQL procedures to streamline airport and aftersales systems.

#### Technologies
Angular, MongoDB, Mulesoft, SQL

#### Impact
Modernized airport check-in systems through scalable self-service platforms.

---

### Software Developer
**General Motors** | 2015-2019

Helped deliver efficiency through modernizing legacy IT systems.

#### Key Achievements
- Modernized full-stack applications supporting customer care and aftersales.
- Built Python TensorFlow models for part analytics and distribution optimization.
- Designed and implemented data ingestion and transformation pipelines for regression models.

#### Technologies
Python, Tensorflow, SQL

#### Impact
Improved aftersales efficiency and decision making by modernizing applications and deploying AI driven analytics with automated data pipelines.

## Skills

### Core Competencies
- **Technical Leadership**: 92%
- **Enterprise Architecture**: 85%
- **Digital Transformation**: 80%
- **AI Tooling**: 70%

### Technical Skills
- **Frontend**: React, Angular, JavaScript, TypeScript, HTML/CSS
- **Backend**: Node.js, Java, Spring Boot, C#, .NET
- **Databases**: PostgreSQL, MySQL, SQL Server, Redis
- **Cloud & DevOps**: AWS, Azure, Docker, Kubernetes, Jenkins, Git
- **Architecture**: Microservices, REST APIs, CI/CD, Agile

## Education
- **B.S.B.A Computer Information Systems** | Northern Arizona University | 2015`;

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
