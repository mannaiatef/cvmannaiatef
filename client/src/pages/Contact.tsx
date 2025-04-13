import { useRef } from "react";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const inView = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
    triggerOnce: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`section hidden-section ${inView ? 'visible' : ''}`}
    >
      <div className="glass-panel p-8 md:p-12 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
          Me Contacter
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-secondary">
              Informations de Contact
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <i className="fas fa-envelope text-secondary"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-300">atefmannai22@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <i className="fas fa-phone text-secondary"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Téléphone</h4>
                  <p className="text-gray-300">(+216) 55 739 162</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <i className="fas fa-location-dot text-secondary"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Adresse</h4>
                  <p className="text-gray-300">Cité elfawez, Mourouj 5, Ben Arous</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Réseaux sociaux</h4>
                <div className="flex gap-4">
                  <a href="#" className="bg-secondary/20 p-3 rounded-full hover:bg-secondary/40 transition duration-300">
                    <i className="fab fa-linkedin-in text-secondary"></i>
                  </a>
                  <a href="#" className="bg-secondary/20 p-3 rounded-full hover:bg-secondary/40 transition duration-300">
                    <i className="fab fa-github text-secondary"></i>
                  </a>
                  <a href="#" className="bg-secondary/20 p-3 rounded-full hover:bg-secondary/40 transition duration-300">
                    <i className="fab fa-twitter text-secondary"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-secondary">
              Envoyez-moi un message
            </h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Nom</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 rounded-lg bg-primary/50 border border-secondary/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition duration-300" 
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 rounded-lg bg-primary/50 border border-secondary/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition duration-300" 
                  placeholder="Votre email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full p-3 rounded-lg bg-primary/50 border border-secondary/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition duration-300" 
                  placeholder="Sujet du message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full p-3 rounded-lg bg-primary/50 border border-secondary/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition duration-300" 
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full py-3 px-6 rounded-lg font-semibold"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
