import ProjectCard from '@/components/project/ProjectCard'
import React from 'react'
import { projectList } from '@/data/projectData'

const page = () => {
  return (
    <div className='p-4 py-28 xl:px-20'>
      <ProjectCard projectList={projectList}/>
    </div>
  )
}

export default page
