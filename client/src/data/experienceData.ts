export interface ExperienceItem {
  title: string;
  period: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
}

export const professionalExperience: ExperienceItem[] = [
  {
    title: "Adjoint SAV - Géant",
    period: "Août 2021 - Présent",
    description: "Adjoint service après vente chez Azur City, responsable de la gestion du service client et du suivi des demandes."
  },
  {
    title: "Stagiaire - Falcon Service",
    period: "Été 2023",
    description: "Développement d'une application web de gestion de recrutement pour la société, permettant de publier des offres et de gérer les candidatures."
  },
  {
    title: "Ressources Humaines - Flacon Service",
    period: "Sep 2017 - Nov 2019",
    description: "Gestion des ressources humaines, planification stratégique de l'équipe, prospection téléphonique et suivi des dossiers clients et agents."
  },
  {
    title: "Stage Projet Fin d'Études - CNSS",
    period: "Fév 2016 - Mai 2016",
    description: "Création d'une application web de gestion de fiche de paie pour la Caisse Nationale de Sécurité Sociale."
  }
];

export const education: ExperienceItem[] = [
  {
    title: "École d'Ingénieur ESPRIT",
    period: "2023 - Présent",
    description: "Formation en ingénierie informatique, spécialisation en développement logiciel et architecture microservices."
  },
  {
    title: "Licence Appliquée en Développement Système d'Information",
    period: "2014 - 2016",
    description: "Institut Supérieur des Études et Technologies de Béja. Spécialité: Développement Système d'Information."
  },
  {
    title: "Baccalauréat Sciences de l'Informatique",
    period: "2013",
    description: "Lycée Secondaire de Bouarada, Siliana."
  }
];

export const certifications: Certification[] = [
  {
    title: "Formation Docker & Kubernetes",
    issuer: "2023 - Plateforme en ligne"
  },
  {
    title: "Angular - The Complete Guide",
    issuer: "2023 - Udemy"
  },
  {
    title: "Spring Boot Microservices",
    issuer: "2024 - Plateforme en ligne"
  },
  {
    title: "Three.js Journey",
    issuer: "2024 - Formation en ligne"
  }
];
