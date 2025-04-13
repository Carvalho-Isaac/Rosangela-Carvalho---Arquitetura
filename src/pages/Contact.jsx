import React from 'react'

import '../App.css';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import ContactSecction from '../components/ContactSecction';

function Contact() {
    return (
        <>
        <Navbar />
        <HeroSection
        routerParts={[{text: "início", href: "/"}, {text: "contato"}]}
        titleParts={['Contato']}
        className = 'pages' />
        <ContactSecction />
        <Footer />
        </>
    )
}

export default Contact
