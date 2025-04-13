export interface Project {
  title: string;
  description: string;
  technologies: string[];
  period: string;
  icon: string;
}

export const projectsData: Project[] = [
  {
    title: "Smart Delivery",
    description: "Architecture microservices permettant aux clients de consulter les menus des restaurants et de commander des repas avec système de livraison.",
    technologies: [
      "Spring Boot",
      "Angular",
      "Python",
      "Eureka",
      "Docker",
      "Keycloak",
      "Google Maps API"
    ],
    period: "Jan 2024 - Mai 2024",
    icon: "fas fa-utensils"
  },
  {
    title: "Gestion de Construction",
    description: "Application microservices avec kanban board, statistiques, diagramme de Gantt et modèle 3D pour la gestion de projets de construction.",
    technologies: [
      "Angular Material",
      "Spring Boot",
      "Three.js",
      "Chart.js",
      "Microservices",
      "Docker"
    ],
    period: "Jan 2024 - Mai 2024",
    icon: "fas fa-building"
  },
  {
    title: "Gestion de Voyage",
    description: "Application de gestion de voyage permettant la réservation et l'organisation de voyages.",
    technologies: [
      ".NET",
      "C#",
      "Entity Framework",
      "SQL Server"
    ],
    period: "Sep 2024 - Jan 2025",
    icon: "fas fa-plane"
  },
  {
    title: "Gestion de Recrutement",
    description: "Application web permettant de publier des offres d'emploi et de gérer les candidatures pour Falcon Service.",
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "MySQL"
    ],
    period: "Stage d'été 2023",
    icon: "fas fa-user-tie"
  },
  {
    title: "Application Web Symfony",
    description: "Application web développée avec le framework Symfony dans le cadre des projets académiques.",
    technologies: [
      "Symfony",
      "PHP",
      "Twig",
      "MySQL",
      "Doctrine"
    ],
    period: "Jan 2023 - Mai 2023",
    icon: "fas fa-laptop-code"
  },
  {
    title: "Application JavaFX",
    description: "Application desktop développée avec Java et JavaFX dans le cadre des projets académiques.",
    technologies: [
      "Java",
      "JavaFX",
      "JDBC",
      "MySQL"
    ],
    period: "Jan 2023 - Mai 2023",
    icon: "fab fa-java"
  }
];
