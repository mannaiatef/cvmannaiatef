import { useRef, useEffect } from "react";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import { programmingSkills, frameworkSkills, additionalSkills } from "@/data/skillsData";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const inView = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      skillsRef.current.forEach((skillBar, index) => {
        if (skillBar) {
          setTimeout(() => {
            const progressBar = skillBar.querySelector('.skill-progress');
            if (progressBar instanceof HTMLElement) {
              progressBar.style.width = '0%';
              setTimeout(() => {
                const width = progressBar.getAttribute('data-width');
                progressBar.style.width = width || '0%';
              }, 100);
            }
          }, index * 100);
        }
      });
    }
  }, [inView]);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`section hidden-section ${inView ? 'visible' : ''}`}
    >
      <div className="glass-panel p-8 md:p-12 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
          Compétences Techniques
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-secondary">
              Langages de Programmation
            </h3>
            
            <div className="space-y-4">
              {programmingSkills.map((skill, index) => (
                <div key={skill.name} ref={el => skillsRef.current[index] = el}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      data-width={`${skill.level}%`}
                      style={{ width: inView ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Frameworks & Technologies */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-secondary">
              Frameworks & Technologies
            </h3>
            
            <div className="space-y-4">
              {frameworkSkills.map((skill, index) => (
                <div key={skill.name} ref={el => skillsRef.current[index + programmingSkills.length] = el}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      data-width={`${skill.level}%`}
                      style={{ width: inView ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional Skills */}
        <div className="mt-12">
          <h3 className="text-xl font-display font-semibold mb-6 text-secondary">
            Compétences Additionnelles
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map(skill => (
              <span key={skill} className="px-4 py-2 rounded-full bg-secondary/20 text-white">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
