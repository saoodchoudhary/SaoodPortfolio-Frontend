"use client"
import ProjectCard from '@/components/project/ProjectCard';
import ProjectFilter from '@/components/project/ProjectFilter';
import React, { useState } from 'react';
import { projectList } from '@/data/projectData';

const ProjectsPage = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectList);

  return (
    <div className="p-4 py-28 xl:px-20">
      <ProjectFilter projectList={projectList} setFilteredProjects={setFilteredProjects} />
      <ProjectCard projectList={filteredProjects} />
    </div>
  );
};

export default ProjectsPage;
