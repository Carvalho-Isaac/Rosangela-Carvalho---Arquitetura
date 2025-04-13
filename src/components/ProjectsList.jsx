import React from 'react';
import projectsData from '../data/projectsData';
import ProjectGallery from './ProjectGallery';

const ProjectsList = () => {
    return (
        <section className="projects-container">
            {projectsData.map(project => (
                <ProjectGallery
                    key={project.id}
                    project={project}
                />
            ))}
        </section>
    );
};

export default ProjectsList;