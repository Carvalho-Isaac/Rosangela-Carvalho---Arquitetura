import React from 'react'
import PortfolioImage from './PortfolioImage'

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <span className='span-show'>Portfólio</span>
            <h2>Conheça nossos projetos</h2>
            <div className='portfolio-container'>
                <PortfolioImage />
                <div className='portfolio-text'>
                    <a href="">
                        <span>Arquitetura, Urbanismo e Paisagismo</span>
                        <h2>Portfólio</h2>
                        <p>Conheça alguns de nossos projetos de Arquitetura Residêncial, Urbanismo,
                            Paisagismo, Ambientes e Mostras de Arquitetura.</p>
                        <span className='portfolio-anchor'>Veja nosso portfólio</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
