import React, { useEffect, useRef, useState } from 'react';
import { forwardRef } from 'react';

const Header = forwardRef((props, ref) => {
  const { highlight, refMeasurements } = props;
  const { about, projects, resume, contact } = highlight[0];
  const [measurements, setMeasurements] = useState(null);

  useEffect(() => {
    if (refMeasurements) {
      setMeasurements(refMeasurements);
    }
  }, [refMeasurements]);

  function handleScroll(ref) {
    ref.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div
      className={`sticky w-full top-0 z-50 flex sm:block text-lg sm:text-2xl `}
    >
      <div className={`w-full bg-orange-200 px-5 pt-5 `}>
        <div className="">Michael DeSantis</div>
        <div className="">Web Developer</div>
        <div>--</div>
      </div>
      <div className={`h-[${measurements?.header}px]`}></div>
      <div className="flex flex-col bg-orange-200 sm:bg-transparent px-5 pt-5 sm:absolute">
        <button
          onClick={() => handleScroll(ref.current[0])}
          className={`${
            about ? 'animate-highlightIn' : ''
          } my-0 text-xs px-1 rounded sm:mb-3  sm:text-sm`}
        >
          About Me
        </button>
        <button
          onClick={() => handleScroll(ref.current[1])}
          className={`${
            projects ? 'animate-highlightIn' : ''
          } my-0 text-xs px-1 rounded sm:my-3  sm:text-sm`}
        >
          Projects
        </button>
        <button
          onClick={() => handleScroll(ref.current[2])}
          className={`${
            resume ? 'animate-highlightIn' : ''
          } my-0 text-xs px-1 rounded sm:my-3  sm:text-sm`}
        >
          Resume
        </button>
        <button
          onClick={() => handleScroll(ref.current[3])}
          className={`${
            contact ? 'animate-highlightIn' : ''
          } my-0 text-xs px-1 rounded sm:my-3  sm:text-sm`}
        >
          Contact
        </button>
      </div>
    </div>
  );
});
export default Header;
