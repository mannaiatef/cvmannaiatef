import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const inView = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`section hidden-section ${inView ? 'visible' : ''}`}
    >
      <div className="glass-panel p-8 md:p-12 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
          À propos de moi
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-6 text-lg">
              Actuellement étudiant en génie logiciel à l'école d'ingénieur 
              <span className="text-accent font-bold"> ESPRIT</span>, je suis passionné par 
              le développement d'applications web et la conception d'architectures microservices.
            </p>
            <p className="mb-6 text-lg">
              J'ai eu l'opportunité de travailler sur diverses technologies, du développement 
              backend avec Java, Spring Boot et Symfony, au frontend avec Angular et React, 
              en passant par la conteneurisation avec Docker.
            </p>
            <p className="text-lg">
              Mon parcours m'a permis d'acquérir une solide expérience dans la gestion de 
              projets informatiques et la résolution de problèmes complexes, tout en développant 
              un esprit critique et analytique.
            </p>
          </div>
          
          <div className="glass-panel p-6">
            <h3 className="text-xl font-display font-bold mb-4 text-secondary">
              Informations personnelles
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <i className="fas fa-user-graduate text-accent w-6"></i>
                <span>Ingénierie Informatique - ESPRIT</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-location-dot text-accent w-6"></i>
                <span>Cité elfawez, Mourouj 5, Ben Arous</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-accent w-6"></i>
                <span>atefmannai22@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-accent w-6"></i>
                <span>(+216) 55 739 162</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-language text-accent w-6"></i>
                <span>Français, Anglais, Arabe</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
