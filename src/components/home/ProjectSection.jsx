"use client"
// components/SeeAllProjects.js
import { useRouter } from 'next/navigation';
import { projectList } from '@/data/projectData';
import ProjectCard from '../project/ProjectCard';

export default function ProjectSection() {
  const router = useRouter();

  const navigateToProjects = () => {
    router.push('/project');
  };

  return (
    <div className="flex flex-col items-center  bg-green-50 p-4">
      <h2 className="text-3xl font-semibold text-green-700 mb-4 py-3">Projects</h2>
    <ProjectCard projectList={projectList} />
      <button
        onClick={navigateToProjects}
        className="px-6 mt-8 mb-5 py-2 bg-green-700 text-white rounded-lg hover:bg-green-900 transition-colors duration-300"
      >
        See All Projects
      </button>
    </div>
  );
}

