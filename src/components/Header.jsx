import React from 'react';
import bars3 from '../assets/bars3.svg';
import github from '../assets/github.svg';

const Header = () => {
  return (
    <div className="sticky w-full top-0 z-50 flex sm:block text-lg sm:text-2xl ">
      <div className="w-full bg-orange-300 px-5 pt-5">
        <div className="">Michael DeSantis</div>
        <div className="">Web Developer</div>
        <div>--</div>
      </div>
      <div className="bg-orange-300 sm:bg-transparent px-5 pt-6 sm:pt-5 sm:absolute">
        <div className="my-0 text-xs sm:mb-3  sm:text-sm">About Me</div>
        <div className="my-0 text-xs sm:my-3  sm:text-sm">Projects</div>
        <div className="my-0 text-xs sm:my-3  sm:text-sm">Resume</div>
        <div className="my-0 text-xs sm:my-3  sm:text-sm">Contact</div>
      </div>
    </div>
  );
};

export default Header;
