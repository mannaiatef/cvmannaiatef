import { useRef } from "react";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import { professionalExperience, education, certifications } from "@/data/experienceData";

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const inView = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className={`section hidden-section ${inView ? 'visible' : ''}`}
    >
      <div className="glass-panel p-8 md:p-12 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
          Expérience & Formation
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-secondary">
              Expérience Professionnelle
            </h3>
            
            <div className="space-y-8">
              {professionalExperience.map((exp, index) => (
                <div key={index} className="timeline-item pl-8 pb-8">
                  <h4 className="font-display font-semibold text-lg">{exp.title}</h4>
                  <p className="text-accent text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-secondary">
              Formation
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item pl-8 pb-8">
                  <h4 className="font-display font-semibold text-lg">{edu.title}</h4>
                  <p className="text-accent text-sm mb-2">{edu.period}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mt-12">
          <h3 className="text-xl font-display font-semibold mb-6 text-secondary">
            Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-panel p-4">
                <h4 className="font-display font-semibold">{cert.title}</h4>
                <p className="text-sm text-gray-300">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
