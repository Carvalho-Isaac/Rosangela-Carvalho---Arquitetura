import React, { useEffect } from 'react';
import Logo from '../assets/logos/rosangela-carvalho-arq-logo.png';
import SvgIcon from './SvgIcon';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const handleBioClick = (e) => {
        if (window.location.pathname === "/") {
            e.preventDefault();
            const bioSection = document.getElementById("bio");
            if (bioSection) {
                bioSection.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            e.preventDefault();
            navigate("/", { state: { scrollToBio: true } });
        }
    };

    useEffect(() => {
        if (window.location.pathname === "/" && window.history.state?.scrollToBio) {
            const bioSection = document.getElementById("bio");
            if (bioSection) {
                bioSection.scrollIntoView({ behavior: "smooth" });
            }
            // Limpa o state para evitar scroll em navegações futuras
            window.history.replaceState({}, document.title);
        }
    }, []);

    return (
        <footer>
            <div className="footer-containers footer-containers-ini">
                <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                    <img src={Logo} className="footer-logo" alt="Logo Rosângela Carvalho Arquitetura" />
                </NavLink>
                <p>CAU-AL: A 22614-9</p>
                <p>Paixão pela transformação.</p>
                <div className="footer-social-list">
                    <a href="https://www.youtube.com/@projetosrosangela" target="_blank" className="footer-social-link">
                        <div className="footer-social-list-item">
                            <SvgIcon iconName="youtube" width={20} height={20} />
                        </div></a>
                    <a href="https://www.facebook.com/rosangela.carvalho.102" target="_blank" className="footer-social-link">
                        <div className="footer-social-list-item">
                            <SvgIcon iconName="facebook" width={20} height={20} />
                        </div></a>
                    <a href="https://www.instagram.com/rosangelacarvalhoarquitetura" target="_blank" className="footer-social-link">
                        <div className="footer-social-list-item">
                            <SvgIcon iconName="instagram" width={20} height={20} />
                        </div></a>
                    <a href="https://wa.me/5582999852911" target="_blank" className="footer-social-link">
                        <div className="footer-social-list-item">
                            <SvgIcon iconName="whatsapp" width={20} height={20} />
                        </div></a>
                </div>
            </div>
            <div className="footer-containers footer-containers-about">
                <h3>Sobre</h3>
                <ul>
                    <li><Link to="/" onClick={handleBioClick}>
                        <SvgIcon iconName="arrowright" width={15} height={15} />
                        Nossa história
                    </Link></li>
                    <li><NavLink to="/Projetos" onClick={() => window.scrollTo(0, 0)}>
                        <SvgIcon iconName="arrowright" width={15} height={15} />
                        Projetos
                    </NavLink></li>
                    <li><NavLink to="/Contato" onClick={() => window.scrollTo(0, 0)}>
                        <SvgIcon iconName="arrowright" width={15} height={15} />
                        Contato
                    </NavLink></li>
                </ul>
            </div>
            <div className="footer-containers footer-containers-info">
                <ul>
                    <li><a href="https://maps.app.goo.gl/yRUgUAxZzMVjnVrj8" target="_blank">
                        <SvgIcon iconName="maps" height={15} />Rua Antônio Marroquim, 673. Baixão, Arapiraca - Alagoas. Brasil</a></li>
                    <li><a href="tel:82999852911">
                        <SvgIcon iconName="phone" width={15} height={15} />+55 82 99985-2911</a></li>
                    <li><a href="mailto:projetosrosangelacarvalho@gmail.com">
                        <SvgIcon iconName="email" width={15} height={15} />projetosrosangelacarvalho@gmail.com</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
