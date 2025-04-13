import React from 'react'
import SvgIcon from './SvgIcon'
import { NavLink } from 'react-router-dom'

const HeroSection = ({
  routerParts = [],
  titleParts = [], // Array de partes do título (ex: ['Arte,', 'Arquitetura', 'e Urbanismo'])
  subtitle = '',   // Subtítulo (ex: 'Paixão pela transformação')
  ctaPrimary = {},
  ctaSecondary = {},
  className = '' // Classes adicionais opcionais
}) => {
  return (
    <section className={`hero-section ${className}`}>
      <div className='hero-bg'>
        <div className='hero-content'>
          {routerParts.length > 0 && (
            <div className='router-parts'>
              {routerParts.map((part, index) => (
                <React.Fragment key={index}>
                  {/* Verifica se o item tem href (se sim, renderiza como link) */}
                  {part.href ? (
                    <NavLink to={part.href} end>{part.text}</NavLink> // Ou <NavLink to={part.href}> se for React Router
                  ) : (
                    <span>{part.text}</span>
                  )}

                  {/* Seta entre os itens (se não for o último) */}
                  {index < routerParts.length - 1 && (
                    <SvgIcon iconName="arrowright" width={22} height={15} />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
          <h1 className='hero-title'>
            {titleParts.map((part, index) => (
              <span key={index}>{part}</span>
            ))}
          </h1>
          {subtitle && <p>{subtitle}</p>}
        </div>

        {(ctaPrimary?.text && ctaPrimary?.href) && (
          <div className='hero-cta'>
            <a href={ctaPrimary.href}>
              <span className='hero-cta-span hero-cta-explore'>
                {ctaPrimary.text}
              </span>
            </a>

            {ctaSecondary?.text && ctaSecondary?.href && (
              <a href="https://www.youtube.com/@projetosrosangela"
                target="_blank">
                <div className='hero-cta-video'>
                  {ctaSecondary.icon && (
                    <div className='hero-cta-video-icon'>
                      <SvgIcon iconName="yttriangle" width={20} height={22} />
                    </div>
                  )}
                  <span className='hero-cta-span'>{ctaSecondary.text}</span>
                </div>
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection