export interface Skill {
  name: string;
  level: number;
}

export const programmingSkills: Skill[] = [
  { name: "Java/JEE", level: 90 },
  { name: "JavaScript/TypeScript", level: 85 },
  { name: "PHP", level: 80 },
  { name: "C#/.NET", level: 75 },
  { name: "Python", level: 70 },
  { name: "C/C++", level: 65 }
];

export const frameworkSkills: Skill[] = [
  { name: "Spring Boot", level: 85 },
  { name: "Angular", level: 80 },
  { name: "Symfony", level: 75 },
  { name: "Docker/Microservices", level: 80 },
  { name: "Three.js/WebGL", level: 70 },
  { name: "SQL/NoSQL", level: 85 }
];

export const additionalSkills: string[] = [
  "Git/GitHub",
  "UML",
  "Agile/Scrum",
  "API REST",
  "Keycloak",
  "Eureka",
  "Chart.js",
  "Material UI",
  "Linux",
  "Windows",
  "Android",
  "LaTeX"
];
