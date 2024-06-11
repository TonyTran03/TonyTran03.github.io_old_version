import React, { useRef, useState, useEffect } from 'react';

const Project = () => {
  const [projects, setProjects] = useState([
    { name: 'Hot Daddy', description: '2Fold tries to tackle concept abstraction by giving users control instead of assigning them to a rigid curriculum.', photo: 'path_to_image1', phrase: 'Temp ' },
    { name: '2Fold', description: 'Temp words', photo: 'path_to_image2' , phrase: 'Temp '},
    // Add initial projects here
  ]);

  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      // Add logic to enable/disable buttons based on scroll position
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="project-section">

      <div className="projects-container" ref={containerRef}>
        {projects.map((project, index) => (
          <div 
            className={`project-item ${selectedProject.name === project.name ? 'active' : ''}`} 
            key={index}
            onClick={() => handleProjectClick(project)}
          >
            <div className="flex justify-center px-16 py-16 border-t">
              {project.name}
            </div>
            <div className="project-description">{project.phrase}</div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="project-details glass">
          <div className='hero min-height-16 bg-base-200  text-5xl font-bold '>{selectedProject.name}</div>
          <p>{selectedProject.description}</p>
          <img src={selectedProject.photo} alt={selectedProject.name} style={{ width: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default Project;
