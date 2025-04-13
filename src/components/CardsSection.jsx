import React from 'react';
import CountUp from 'react-countup';
import Cards from './Cards';

const CardsSection = () => {

    const duration = 2;

    const cardsData = [
        {
            title: 'Projetos Arquitetônicos',
            description:
                'Da concepção à construção, nossa equipe cria espaços que combinam funcionalidade e beleza. De residências a edifícios comerciais, tornamos sua visão uma inspiradora realidade arquitetônica.',
        },
        {
            title: 'Projetos Urbanísticos',
            description:
                'Compreendemos o pulso das cidades modernas. Nossos projetos urbanísticos não apenas transformam áreas, mas também criam comunidades vibrantes e sustentáveis. Junte-se a nós para moldar o futuro das nossas cidades.',
        },
        {
            title: 'Interiores',
            description:
                'Seja em casa ou no escritório, o design de interiores é crucial para criar ambientes acolhedores e funcionais. Deixe-nos guiar você por um processo que transforma cada espaço em uma expressão autêntica do seu estilo de vida.',
        },
        {
            title: 'Consultorias e mais',
            description:
                'Para tomar decisões informadas em seus projetos, confie na nossa consultoria em arquitetura. Desde orientações de design até análises de viabilidade, estamos aqui para tornar sua jornada arquitetônica mais suave e eficiente.',
        }
    ]

    return (
        <section className='cards-section'>
            <div className='cards-content'>
                <div className='cards-content-item'><h2><strong className='cards-content-item-number'><CountUp start={0} end={30} duration={duration} /> </strong><span>Anos de Experiência</span></h2></div>

                <div className='cards-content-item cards-content-item-border'><h2><strong className='cards-content-item-number'><CountUp start={0} end={600} duration={duration} />+</strong><span> Projetos Concluído</span></h2></div>

                <div className='cards-content-item'><h2><strong className='cards-content-item-number'><CountUp start={0} end={30} duration={duration} />+</strong><span> Parceiros e Fornecedores</span></h2></div>
            </div>

            <h2 className='cards-item-h2'>Atuação</h2>

            <div className='cards-item'>
                {cardsData.map((card, index) => (
                    <Cards
                        key={index}
                        title={card.title}
                        description={card.description}
                        cardNumber={index + 1}
                    />
                ))}
            </div>
        </section>
    )
}

export default CardsSection
