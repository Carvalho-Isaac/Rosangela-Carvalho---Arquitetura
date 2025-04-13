import React, { useState, useEffect, useRef } from "react";
import logoArq from '../assets/logos/rosangela-carvalho-arq-logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuAberto, setMenuAberto] = useState(false);
    const [navFixa, setNavFixa] = useState(false);
    const navbarRef = useRef(null); // Criando referência para a navbar

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (navbarRef.current) {
                const alturaNavbar = navbarRef.current.offsetHeight; // Obtém a altura da navbar
                if (window.scrollY > alturaNavbar * 2) { // Condição para ativar a navbar fixa
                    setNavFixa(true);
                } else {
                    setNavFixa(false);
                }
            }
        };

        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setMenuAberto(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <nav ref={navbarRef} id="navbar" className={`nav-top ${navFixa ? "fixa" : ""}`}>
            <div className="nav-container">
                <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                    <img src={logoArq} alt="logo Rosângela Carvalho - Arquitetura" />
                </NavLink>
                <button className="menu-button" onClick={toggleMenu}>
                    <span>Menu</span>
                </button>
                <div className={`menu ${menuAberto ? "ativo" : ""}`}>
                    <ul>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => window.scrollTo(0, 0)}>Início</NavLink></li>
                        <li><NavLink to="/Projetos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => window.scrollTo(0, 0)}>Projetos</NavLink></li>
                        <li><NavLink to="/Contato" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => window.scrollTo(0, 0)}>Contato</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
