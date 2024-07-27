"use client"
import React, { useState, useEffect } from 'react';

const ProjectFilter = ({ projectList, setFilteredProjects }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTechnology, setSelectedTechnology] = useState('');
  const [selectedScreen, setSelectedScreen] = useState('');

  const categories = Array.from(new Set(projectList.map(project => project.category)));
  const technologies = Array.from(new Set(projectList.flatMap(project => project.skill)));
  const screens = Array.from(new Set(projectList.flatMap(project => project.screen)));

  useEffect(() => {
    const filtered = projectList.filter(project => {
      return (
        (selectedCategory === '' || project.category === selectedCategory) &&
        (selectedTechnology === '' || project.skill.includes(selectedTechnology)) &&
        (selectedScreen === '' || project.screen.includes(selectedScreen))
      );
    });
    setFilteredProjects(filtered);
  }, [selectedCategory, selectedTechnology, selectedScreen, projectList, setFilteredProjects]);

  return (
    <div className="mb-8">
      <div className="flex gap-4 flex-wrap">
        <select
          className="border rounded-md p-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>

        <select
          className="border rounded-md p-2"
          value={selectedTechnology}
          onChange={(e) => setSelectedTechnology(e.target.value)}
        >
          <option value="">All Technologies</option>
          {technologies.map((tech, index) => (
            <option key={index} value={tech}>{tech}</option>
          ))}
        </select>

        <select
          className="border rounded-md p-2"
          value={selectedScreen}
          onChange={(e) => setSelectedScreen(e.target.value)}
        >
          <option value="">All Screens</option>
          {screens.map((screen, index) => (
            <option key={index} value={screen}>{screen}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProjectFilter;
