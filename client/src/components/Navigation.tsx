import { scrollToSection } from "@/lib/scroll";

const Navigation = () => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-4 p-2 glass-panel">
      <button className="nav-btn" onClick={() => scrollToSection("home")}>
        <i className="fas fa-home"></i>
      </button>
      <button className="nav-btn" onClick={() => scrollToSection("about")}>
        <i className="fas fa-user"></i>
      </button>
      <button className="nav-btn" onClick={() => scrollToSection("skills")}>
        <i className="fas fa-code"></i>
      </button>
      <button className="nav-btn" onClick={() => scrollToSection("projects")}>
        <i className="fas fa-project-diagram"></i>
      </button>
      <button className="nav-btn" onClick={() => scrollToSection("experience")}>
        <i className="fas fa-briefcase"></i>
      </button>
      <button className="nav-btn" onClick={() => scrollToSection("contact")}>
        <i className="fas fa-envelope"></i>
      </button>
    </div>
  );
};

export default Navigation;
