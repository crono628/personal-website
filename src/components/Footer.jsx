import React from 'react';
import github from '../assets/github.svg';

const Footer = () => {
  return (
    <div className="flex justify-center items-center sticky w-full h-10 sm:h-12 z-50 bottom-0 bg-orange-500">
      <div className="flex-1 ml-4 text-white">MD © 2022</div>
      <div className="mr-4">
        <a
          href="https://github.com/crono628"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={github}
            alt="github"
            className="h-6 sm:h-8 cursor-pointer "
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
