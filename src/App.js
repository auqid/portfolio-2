import React, { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PrivacyModal from "./components/Privacy";
import SEO from "./components/SEO";
import { initGA } from "./analytics";

function App() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  useEffect(() => {
    // Initialize Google Analytics
    initGA();
  }, []);

  const openPrivacyModal = () => {
    setIsPrivacyModalOpen(true);
  };

  const closePrivacyModal = () => {
    setIsPrivacyModalOpen(false);
  };

  return (
    <HelmetProvider>
      <SEO />
      <div className="App" id="top">
        <Header openPrivacyModal={openPrivacyModal} />
        <main>
          <Main />
          <Intro />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <PrivacyModal isOpen={isPrivacyModalOpen} onClose={closePrivacyModal} />
      </div>
    </HelmetProvider>
  );
}

export default App;
