import { useRef } from "react";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import { projectsData } from "@/data/projectsData";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const inView = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`section hidden-section ${inView ? 'visible' : ''}`}
    >
      <div className="glass-panel p-8 md:p-12 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
          Mes Projets
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card glass-panel p-6">
              <div className="h-48 mb-4 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-lg flex items-center justify-center">
                <i className={`${project.icon} text-6xl text-secondary`}></i>
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-secondary mb-2">Technologies utilisées:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded bg-secondary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{project.period}</span>
                <button className="text-accent hover:underline">Voir détails</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
