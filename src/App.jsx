import React, { useEffect, useRef, useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import ScrollButton from './components/ScrollButton';

const App = () => {
  const [highlight, setHighlight] = useState([
    { about: true, projects: false, resume: false, contact: false },
  ]);
  const aboutRef = useRef();
  const projectsRef = useRef();
  const resumeRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', setHighlightState);
    return () => window.removeEventListener('scroll', setHighlightState);
  }, []);

  // const logIt = () => {
  //   console.log('about', aboutRef.current.getBoundingClientRect().bottom);
  //   console.log('window', window.innerHeight);
  // };

  const setHighlightState = () => {
    if (
      aboutRef.current.getBoundingClientRect().bottom +
        window.innerHeight / 1.5 >
      window.innerHeight
    ) {
      setHighlight([
        { about: true, projects: false, resume: false, contact: false },
      ]);
    } else if (
      projectsRef.current.getBoundingClientRect().bottom +
        window.innerHeight / 1.5 >
      window.innerHeight
    ) {
      setHighlight([
        { about: false, projects: true, resume: false, contact: false },
      ]);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto bg-orange-300 min-h-screen relative pb-20">
      <Header highlight={highlight} />
      <div className="px-5 sm:ml-28 ">
        <div className=" md:max-w-screen-md md:mx-auto">
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
        </div>
        <ScrollButton below={200} />
      </div>
    </div>
  );
};

export default App;
