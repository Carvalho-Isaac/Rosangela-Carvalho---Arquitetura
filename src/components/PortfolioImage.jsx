import React, { useState, useEffect } from 'react';
import image1 from '../assets/rendersproject/1-santa-maria-1.webp'
import image2 from '../assets/rendersproject/3-residencia-rf-1.webp'
import image3 from '../assets/rendersproject/6-mais-parque-1.webp'

const PortfolioImage = () => {

    const images = [image1, image2, image3]; // Array com as 3 imagens
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cicla entre 0, 1 e 2
        }, 5000); // Troca a cada 5 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }, [images.length]);

    const styles = {
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 0.5s ease-in-out'
    }

    return (
        <div className='portfolio-image' style={styles}>
        </div>
    )
}

export default PortfolioImage
