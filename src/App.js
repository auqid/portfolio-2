import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PrivacyModal from "./components/Privacy";
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
    <>
      <Header openPrivacyModal={openPrivacyModal} />
      <Main />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={closePrivacyModal} />
    </>
  );
}

export default App;
