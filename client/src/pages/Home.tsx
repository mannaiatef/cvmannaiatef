import { scrollToSection } from "@/lib/scroll";

const Home = () => {
  return (
    <section id="home" className="section">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent mb-4">
            Atef Mannai
          </h1>
          <h2 className="text-2xl md:text-3xl font-display mb-8">
            Ingénieur en Développement Logiciel
          </h2>
        </div>
        
        <p className="text-lg md:text-xl mb-12 max-w-2xl">
          Création d'applications innovantes avec des technologies modernes. 
          Spécialisé en développement full-stack et architecture microservices.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            className="btn-primary px-8 py-3 rounded-full font-bold"
            onClick={() => scrollToSection("projects")}
          >
            Voir mes projets
          </button>
          <button 
            className="bg-transparent border-2 border-secondary px-8 py-3 rounded-full font-bold hover:bg-secondary/10 transition duration-300"
            onClick={() => scrollToSection("contact")}
          >
            Me contacter
          </button>
        </div>
        
        <div className="absolute bottom-12 animate-bounce">
          <i className="fas fa-chevron-down text-2xl text-secondary"></i>
        </div>
      </div>
    </section>
  );
};

export default Home;
