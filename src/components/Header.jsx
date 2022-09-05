import React, { useEffect, useRef, useState } from 'react';
import bars3 from '../assets/bars3.svg';
import github from '../assets/github.svg';

const Header = ({ highlight, refMeasurements }) => {
  const { about, projects, resume, contact } = highlight[0];
  const [measurements, setMeasurements] = useState(null);
  const headerRef = useRef();

  useEffect(() => {
    if (refMeasurements) {
      setMeasurements(refMeasurements);
    }
  }, [refMeasurements]);

  function handleScroll(ref) {
    window.scrollTo({
      top: ref - headerRef.current.offsetHeight,
      behavior: 'smooth',
    });
  }

  return (
    <div
      className={`sticky w-full top-0 z-50 flex sm:block text-lg sm:text-2xl `}
    >
      <div ref={headerRef} className={`w-full bg-orange-300 px-5 pt-5 `}>
        <div className="">Michael DeSantis</div>
        <div className="">Web Developer</div>
        <div>--</div>
      </div>
      <div className="flex flex-col bg-orange-300 sm:bg-transparent px-5 pt-5 sm:absolute">
        <button
          onClick={() => handleScroll(measurements.about)}
          className={`${
            about ? 'animate-highlightIn' : ''
          } my-0 text-xs px-1 rounded sm:mb-3  sm:text-sm`}
        >
          About Me
        </button>
        <button
          onClick={() => handleScroll(measurements.projects)}
          className={`${
            projects ? 'animate-highlightIn' : ''
          } my-0 text-xs px-1 rounded sm:my-3  sm:text-sm`}
        >
          Projects
        </button>
        <button
          onClick={() => handleScroll(measurements.resume)}
          className={`${
            resume ? 'animate-highlightIn' : ''
          } my-0 text-xs px-1 rounded sm:my-3  sm:text-sm`}
        >
          Resume
        </button>
        <button
          onClick={() => {
            document.getElementById('contact').scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }}
          className={`${
            contact ? 'animate-highlightIn' : ''
          } my-0 text-xs px-1 rounded sm:my-3  sm:text-sm`}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
