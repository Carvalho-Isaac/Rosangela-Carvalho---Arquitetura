import React, { useState, useEffect } from 'react';

const ProjectGallery = ({ project }) => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false); // Estado para pausar o carrossel

    useEffect(() => {
        setImages(project.images);
    }, [project]);

    useEffect(() => {
        if (images.length <= 1 || isPaused) return; // Não roda se estiver pausado ou só tiver 1 imagem

        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }, [images.length, isPaused]); // Recria se o número de imagens ou o estado de pausa mudar

    if (images.length === 0) {
        return <div className="loading">Carregando projeto...</div>;
    }

    return (
        <div className="project-card">
            <div className="image-gallery"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}>
                <img
                    src={images[currentIndex]}
                    alt={`${project.name} - Imagem ${currentIndex + 1}`}
                    className="gallery-image"
                />

                {images.length > 1 && (
                    <div className="gallery-controls">
                        <button
                            onClick={() => setCurrentIndex(prev => (prev - 1 + images.length) % images.length)}
                            aria-label="Imagem anterior"
                        >
                            ◀
                        </button>

                        <span className="image-counter">
                            {currentIndex + 1}/{images.length}
                        </span>

                        <button
                            onClick={() => setCurrentIndex(prev => (prev + 1) % images.length)}
                            aria-label="Próxima imagem"
                        >
                            ▶
                        </button>
                    </div>
                )}
            </div>

            <div className="project-header">
                <span className="project-meta">{project.type} • {project.year}</span>
                <h2>{project.name}</h2>
                <p className="project-description">{project.description}</p>

                {/* <div className="project-tags">
                {project.tags.map(tag => (
                    <span key={tag} className="tag"> #{tag}</span>
                ))}
            </div> */}

            </div>
        </div>
    );
};

export default ProjectGallery;