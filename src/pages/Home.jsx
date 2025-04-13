import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import '../App.css';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CardsSection from '../components/CardsSection';
import BioSection from '../components/BioSection';
import Portfolio from '../components/Portfolio';
import PartnersAndSuppliers from '../components/PartnersAndSuppliers';
import Footer from '../components/Footer';

function Home() {
  const location = useLocation();

  useEffect(() => {
    // Verifica se veio com o state para scroll
    if (location.state?.scrollToBio) {
      const bioSection = document.getElementById("bio");
      if (bioSection) {
        bioSection.scrollIntoView({ behavior: "smooth" });
      }
      // Limpa o state
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <>
      <Navbar />
      <HeroSection titleParts={['Arte,', 'Arquitetura', 'e Urbanismo']}
        subtitle="Paixão pela transformação"
        ctaPrimary={{ text: "Explore Projetos", href: "/projetos" }}
        ctaSecondary={{ text: "Assista aos vídeos", href: "/videos", icon: true }}/>
      <CardsSection />
      <BioSection id="bio" />
      <Portfolio />
      <PartnersAndSuppliers />
      <Footer />
    </>
  )
}

export default Home
