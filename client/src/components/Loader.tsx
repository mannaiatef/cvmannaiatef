import { useState, useEffect } from "react";

const loadingTexts = [
  "Initialisation de l'environnement 3D...",
  "Chargement des modèles 3D...",
  "Préparation de l'interface...",
  "C'est prêt !",
];

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10;
        
        if (newProgress < 30 && textIndex !== 0) {
          setTextIndex(0);
        } else if (newProgress >= 30 && newProgress < 60 && textIndex !== 1) {
          setTextIndex(1);
        } else if (newProgress >= 60 && newProgress < 90 && textIndex !== 2) {
          setTextIndex(2);
        } else if (newProgress >= 90 && textIndex !== 3) {
          setTextIndex(3);
        }
        
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [textIndex]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#0f0f0f] flex justify-center items-center z-50 transition-opacity duration-1000">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-display font-bold mb-8 text-white">
          Chargement du Portfolio
        </h2>
        <div className="w-[300px] h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-secondary to-accent transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-4 text-secondary">{loadingTexts[textIndex]}</p>
      </div>
    </div>
  );
};

export default Loader;
