import React from 'react';
import { projectCollection } from '../data/projectCollection';

const Projects = () => {
  return (
    <div>
      <div className="sticky top-20 sm:top-24 bg-orange-300 z-40 text-2xl py-5 w-full">
        Projects
      </div>
      {projectCollection.map((project, index) => {
        return (
          <div
            key={index}
            className="py-5 flex flex-col items-start justify-start "
          >
            <div>{project.name}</div>
            <div>{project.description}</div>
            <div>{project.repo}</div>
            <div>{project.live}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
