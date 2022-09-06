import React from 'react';
import { projectCollection } from '../data/projectCollection';

const Projects = () => {
  return (
    <div id="projects" className=" mb-36">
      <div className="text-center sm:pr-28 sticky top-20 sm:top-24 bg-orange-300 z-40 text-2xl py-5 w-full">
        Projects
      </div>
      {projectCollection.map((project, index) => {
        return (
          <div
            key={index}
            className="py-5 flex flex-col items-start justify-start "
          >
            <div className="text-xl">{project.name}</div>
            <div className="text-sm py-3">{project.description}</div>
            <div className="flex gap-10 pb-3">
              <a
                href={`${project.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm p-2 rounded bg-orange-500 text-white hover:bg-orange-700"
              >
                repo
              </a>
              <a
                href={`${project.live}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm p-2 rounded bg-orange-500 text-white hover:bg-orange-700"
              >
                live
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
