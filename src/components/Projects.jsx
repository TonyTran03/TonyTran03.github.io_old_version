import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedBox] = useState('React');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        const filteredProjects = data.filter(project => project.category === 'React');
        setSelectedProject(filteredProjects[0] || null);
        setActiveSlideIndex(0);
      })
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedBox(category);
    const newFilteredProjects = projects.filter(project => project.category === category);
    setSelectedProject(newFilteredProjects[0] || null);
    setActiveSlideIndex(0);

    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  };

  const handleSlideChange = ({ activeIndex }) => {
    if (!isDragging) {
      const project = projects[activeIndex];
      setSelectedProject(project);
      setActiveSlideIndex(activeIndex);
    }
  };

  const handleSelectProject = (project) => {
    if (!isDragging) {
      setSelectedProject(project);
    }
  };

  const filteredProjects = projects.filter(project => project.category === selectedCategory);

  return (
    <div className="project-section project-button">
      {/* Category Dropdown */}
      <div className="dropdown">
        <div tabIndex={0} className="btn  m-1">Category: {selectedCategory}</div>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li className={selectedCategory === 'React' ? ' bg-secondary rounded-box w-52' : ''} onClick={() => handleCategoryChange('React')}>React</li>
          <li className={selectedCategory === 'Python' ? ' bg-secondary rounded-box w-52' : ''} onClick={() => handleCategoryChange('Python')}>Python</li>
          <li className="disabled">Swift</li>
          <li className="disabled">SQL</li>
        </ul>
      </div>

      {/* Swiper Component */}
      <Swiper
        key={selectedCategory}
        direction="vertical"  // Set Swiper direction to vertical
        slidesPerView={2.5}
        initialSlide={activeSlideIndex}
        onSlideChange={handleSlideChange}
        onSliderMove={() => setIsDragging(true)}
        onReachBeginning={() => setIsDragging(false)}
        onReachEnd={() => setIsDragging(false)}
        onTouchEnd={() => setIsDragging(false)}
        onMouseUp={() => setIsDragging(false)}
        
        onSwiper={(swiper) => swiperRef.current = swiper}
        loop={false}
      >
        {filteredProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className={`project-item ${selectedProject === project ? 'active' : ''}`} onClick={() => handleSelectProject(project)}>
              <div className="flex justify-center px-16 py-16 border-t">{project.name}</div>
              <div className="project-description">{project.phrase}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


{selectedProject && (
  <div className="project-details">
    <div className="text-side">
      <div className='hero min-height-16 bg-base-200 text-5xl font-bold'>{selectedProject.name}</div>
      <ul>
        {Array.isArray(selectedProject.description)
          ? selectedProject.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          : selectedProject.description.split("\n\n").map((item, index) => (
              <li key={index}>{item}</li>
            ))
        }
      </ul>
      {/* Buttons for GitHub and Project Website */}
      <div className="buttons">
        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub Repo</a>
        <a href={selectedProject.projectUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Project</a>
      </div>
    </div>
    <img src={selectedProject.photo} alt={selectedProject.name} style={{ width: '50%' }} />
  </div>
)}
    </div>
  );
};

export default Project;
