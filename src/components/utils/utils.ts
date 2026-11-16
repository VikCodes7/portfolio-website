export const titles = [
    'R&D Software Developer',
    'Full Stack Engineer',
    'Problem Solver',
    'Tech Enthusiast',
];

export const developerCode = `const developer = {
  name: "Sai Vikas Chinthirla",
  role: "R&D Software Developer",
  skills: ["Java", "Python", "React",
           "Cloud", "System Design"],
  passion: "Building innovative
            solutions",
  
  createImpact() {
    return this.skills
      .map(skill => innovate(skill))
      .filter(result => result.value);
  }
};`;

export const skillCategories = [
    {
        title: 'Languages',
        icon: '💻',
        skills: [
            { name: 'Java 21', level: 90 },
            { name: 'Python', level: 85 },
            { name: 'JavaScript', level: 85 },
            { name: 'TypeScript', level: 80 },
            { name: 'SQL', level: 80 },
        ],
    },
    {
        title: 'Frontend',
        icon: '🎨',
        skills: [
            { name: 'React', level: 85 },
            { name: 'Angular', level: 75 },
            { name: 'Jotai Atoms', level: 90 },
            { name: 'NgRX', level: 75 },
            { name: 'Next.js', level: 70 },
        ],
    },
    {
        title: 'Backend',
        icon: '⚙️',
        skills: [
            { name: 'Spring Boot', level: 85 },
            { name: 'Node.js', level: 80 },
            { name: 'REST APIs', level: 90 },
            { name: 'Microservices', level: 80 },
            { name: 'GraphQL', level: 70 },
        ],
    },
    {
        title: 'Cloud & DevOps',
        icon: '☁️',
        skills: [
            { name: 'NATS Messaging', level: 85 },
            { name: 'AWS', level: 50 },
            { name: 'Docker', level: 85 },
            { name: 'Kubernetes', level: 75 },
            { name: 'Bash', level: 80 },
        ],
    },
    {
        title: 'Databases',
        icon: '🗄️',
        skills: [
            { name: 'PostgreSQL', level: 85 },
            { name: 'MongoDB', level: 80 },
            { name: 'Redis', level: 75 },
            { name: 'MySQL', level: 80 },
        ],
    },
    {
        title: 'Tools & Others',
        icon: '🛠️',
        skills: [
            { name: 'Git & GitHub', level: 90 },
            { name: 'Distributed Systems', level: 85 },
            { name: 'System Design', level: 85 },
            { name: 'Protobuf / gRPC', level: 80 },
            { name: 'Cypress & JUnit', level: 85 },
        ],
    },
];

export const experiences = [
    {
        role: 'R&D Software Developer',
        company: 'Nokia',
        location: 'Ottawa, Ontario, Canada',
        period: 'Oct 2023 - Present',
        description: [
            'Built asynchronous event-publishing and subscription workflows using NATS to streamline cross-service state synchronization and improve overall system resilience',
            'Architected active-passive database synchronization using Debezium CDC, automating real-time cross-site data replication and ensuring seamless failover consistency',
            'Collaborated with cross-functional teams to deliver innovative R&D solutions',
            'Designed and implemented real-time WebSocket communication services in Node.js, focusing on reliable connection management, asynchronous processing',
            'Designed PostgreSQL materialized views for an analytics dashboard, with scheduled refresh',
        ],
        tech: ['Java 21', 'Spring Boot', 'Azure', 'Kubernetes', 'PostgreSQL', 'Docker', 'Typescript',
            'React', 'Nodejs', 'NATS', 'Debezium'],
        current: true,
    },
    {
        role: 'Software Developer Co-op/Intern',
        company: 'Nokia',
        location: 'Ottawa, Ontario, Canada',
        period: 'Jan 2023 - Oct 2023',
        description: [
            'Optimized PostgreSQL queries using materialized views, resulting in a 50% reduction in fetch time,',
            'Implemented resilient file upload architectures in React, utilizing native AbortController APIs to enable reliable cancelation, retry mechanisms',
            'Built GraphQL APIs with JSON/Protobuf payloads; reduced MongoDB response payloads via query projections, cutting API latency ~40%',
        ],
        tech: ['Angular', 'Java 17', 'Node.js', 'TypeScript', 'Docker', 'MongoDB', 'PostgreSQL',
            'gRPC', 'REST', 'Kubernetes'],
        current: false,
    },
    {
        role: 'Software Developer',
        company: 'Virtusa Consulting Services',
        location: 'Bengaluru, Karnataka, India',
        period: 'July 2019 - Dec 2021',
        description: [
            'Engineered multithreaded Java applications to process real-time data streams, efficiently managing concurrent operations and system resource allocation',
            'Integrated Memcached in Java to cache hot data, cutting API latency by 60% and reducing database read load',
            'Optimized database access layers and complex SQL queries using Hibernate/Spring Data JPA',
        ],
        tech: ['Java 8', 'React', 'MySQL', 'Docker', 'Spring', 'Spring Boot', 'Spring MVC'],
        current: false,
    },
];