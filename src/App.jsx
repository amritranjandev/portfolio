import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CursorSystem from "./components/interactive/CursorSystem";
import DepthLayer from "./components/motion/DepthLayer";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative bg-black">

      {/* 🌊 BACKGROUND (keep yours but slightly improved layering) */}
      <div className="fixed top-0 -z-20 h-full w-full">
        <div className="absolute top-0 h-screen w-screen bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]"></div>
      </div>

      <CursorSystem />

      {/* NAVBAR (no depth) */}
      <Navbar />

      {/* CONTENT */}
      <div className="container mx-auto px-8 relative z-10">

        {/* FOREGROUND (slow movement) */}
        <DepthLayer speed={0.2}>
          <Hero />
        </DepthLayer>

        {/* MID LAYER */}
        <DepthLayer speed={0.5}>
          <About />
          <Technologies />
        </DepthLayer>

        {/* BACK LAYER (faster movement) */}
        <DepthLayer speed={0.8}>
          <Experience />
          <Projects />
          <Contact />
        </DepthLayer>

      </div>
    </div>
  );
};

export default App;