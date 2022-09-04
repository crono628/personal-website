import React from 'react';
import bars3 from '../assets/bars3.svg';
import github from '../assets/github.svg';

const Header = ({ highlight }) => {
  const { about, projects, resume, contact } = highlight[0];

  return (
    <div className="sticky w-full top-0 z-50 flex sm:block text-lg sm:text-2xl ">
      <div className="w-full bg-orange-300 px-5 pt-5">
        <div className="">Michael DeSantis</div>
        <div className="">Web Developer</div>
        <div>--</div>
      </div>
      <div className="bg-orange-300 sm:bg-transparent px-5 pt-5 sm:absolute">
        <div
          id="about"
          className={`${
            about ? 'animate-highlightIn' : 'animate-highlightOut'
          } my-0 text-xs px-1 rounded-lg sm:mb-3  sm:text-sm`}
        >
          About Me
        </div>
        <div
          id="projects"
          className={`${
            projects ? 'animate-highlightIn' : 'animate-highlightOut'
          } my-0 text-xs px-1 rounded-lg sm:my-3  sm:text-sm`}
        >
          Projects
        </div>
        <div id="resume" className="my-0 px-1 text-xs sm:my-3  sm:text-sm">
          Resume
        </div>
        <div id="contact" className="my-0 px-1 text-xs sm:my-3  sm:text-sm">
          Contact
        </div>
      </div>
    </div>
  );
};

export default Header;

const inAnimation = {
  animation: 'inAnimation 250ms ease-in',
  backgroundColor: 'rgb(194 65 12 / var(--tw-bg-opacity)',
};
const outAnimation = {
  animation: 'outAnimation 270ms ease-out',
  animationFillMode: 'forwards',
};
