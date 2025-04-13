import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Loader from "@/components/Loader";
import ThreeScene from "@/components/three/ThreeScene";
import Navigation from "@/components/Navigation";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Experience from "@/pages/Experience";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={MainContent} />
      <Route component={NotFound} />
    </Switch>
  );
}

function MainContent() {
  return (
    <>
      <ThreeScene />
      <Navigation />
      <div className="content-wrapper">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {loading ? <Loader /> : <Router />}
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
