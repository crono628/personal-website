import React from 'react';
import bars3 from '../assets/bars3.svg';
import github from '../assets/github.svg';

const Header = () => {
  return (
    <div className="flex  p-3 w-full relative items-center">
      <img src={github} className="w-6 sm:w-8  cursor-pointer absolute" />
      <div className="silkscreen flex flex-1 flex-col ml-3 justify-center items-center text-lg sm:text-2xl w-full mx-auto">
        <div>Michael DeSantis</div>
        <div>Web Developer</div>
      </div>
    </div>
  );
};

export default Header;
