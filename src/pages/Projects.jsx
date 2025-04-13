import React from 'react'

import '../App.css';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import ProjectsList from '../components/ProjectsList';

function Projects() {
    return (
        <>
        <Navbar />
        <HeroSection 
        routerParts={[{text: "início", href: "/"}, {text: "projetos"}]}
        titleParts={['Projetos']}
        className = 'pages' />
        <ProjectsList />
        <Footer />
        </>
    )
}

export default Projects
