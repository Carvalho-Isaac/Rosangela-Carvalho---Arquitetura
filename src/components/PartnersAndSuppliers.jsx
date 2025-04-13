import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Card from './CardPartnersAndSuppliers';

const PartnersAndSuppliers = () => {
  const data = [
    { 
      id: 1, 
      imagem: 'eugeniovidros', 
      name: 'Eugênio', 
      description: 'Eugênio Vidros', 
      text: 'Os projetos da Rosângela nos apresentam desafios que geram resultados surpreendentes. Há sempre um diferencial nos resultados.' 
    },
    { 
      id: 2, 
      imagem: '', 
      name: 'Pedro Romualdo', 
      description: 'Parque das Águas Incorporadora', 
      text: 'Contar com sua presença nos traz segurança e agilidade na tomada de decisões em projetos imobiliários dos quais somos parceiros' 
    },
    { 
      id: 3, 
      imagem: 'fds', 
      name: 'Daniel Rocha', 
      description: 'FDS Tech', 
      text: 'Vivemos intensamente tudo que foi planejado pela equipe Rosângela Carvalho. Sou muito grato a vocês.' 
    },
    { 
      id: 4, 
      imagem: 'phi', 
      name: 'Albério Carvalho', 
      description: 'Phi Criativo', 
      text: 'Sua parceria proporciona grandes e desafiadoras contribuições para o desenvolvimento da cultura digital.' 
    },
  ];

  return (
    <section className='partners-supliers-section'>
      <span className='span-show'>Parceiros e Fornecedores</span>
      
      <div className="swiper-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1110: {
              slidesPerView: 3,
            },
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          centeredSlides={true}
          grabCursor={true}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Card 
                name={item.name} 
                text={item.text} 
                description={item.description} 
                imagem={item.imagem} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default PartnersAndSuppliers;
