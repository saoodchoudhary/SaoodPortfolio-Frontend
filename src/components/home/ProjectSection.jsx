"use client"
// components/SeeAllProjects.js
import { useRouter } from 'next/navigation';

const projects = [
  { id: 1, image: '/images/saood-min.jpg' },
  { id: 2, image: '/images/saood-min.jpg' },
  { id: 3, image: '/images/saood-min.jpg'},
  { id: 4, image: '/images/saood-min.jpg' },
];

export default function ProjectSection() {
  const router = useRouter();

  const navigateToProjects = () => {
    router.push('/project');
  };

  return (
    <div className="flex flex-col items-center  bg-green-50 p-4">
      <h2 className="text-3xl font-semibold text-green-700 mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {projects.map((project) => (
          <div key={project.id} className="w-full h-48 overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={`Project ${project.id}`}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      <button
        onClick={navigateToProjects}
        className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-900 transition-colors duration-300"
      >
        See All Projects
      </button>
    </div>
  );
}

