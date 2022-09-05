import React, { useEffect, useRef, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Resume from './components/Resume';
import ScrollButton from './components/ScrollButton';

const App = () => {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const resumeRef = useRef();
  const contactRef = useRef();
  const bodyRef = useRef();
  const [highlight, setHighlight] = useState([
    { about: true, projects: false, resume: false, contact: false },
  ]);
  const [refMeasurements, setRefMeasurements] = useState(null);

  useEffect(() => {
    if (refMeasurements === null) {
      setRefMeasurements({
        header: bodyRef.current.offsetTop,
        about: aboutRef.current.offsetTop,
        projects: projectsRef.current.offsetTop,
        resume: resumeRef.current.offsetTop,
        contact: contactRef.current.offsetTop,
      });
    }

    window.addEventListener('scroll', setHighlightState);
    return () => window.removeEventListener('scroll', setHighlightState);
  }, [refMeasurements]);

  function handleHighlightMath(ref) {
    if (
      ref.current.getBoundingClientRect().bottom + window.innerHeight / 1.5 >
      window.innerHeight
    ) {
      return true;
    }
    return false;
  }

  const setHighlightState = () => {
    if (handleHighlightMath(aboutRef)) {
      setHighlight([
        { about: true, projects: false, resume: false, contact: false },
      ]);
    } else if (handleHighlightMath(projectsRef)) {
      setHighlight([
        { about: false, projects: true, resume: false, contact: false },
      ]);
    } else if (handleHighlightMath(resumeRef)) {
      setHighlight([
        { about: false, projects: false, resume: true, contact: false },
      ]);
    } else if (handleHighlightMath(contactRef)) {
      setHighlight([
        { about: false, projects: false, resume: false, contact: true },
      ]);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center ">
      <div className="max-w-screen-lg mx-auto bg-orange-300 min-h-screen relative mb-60">
        <Header highlight={highlight} refMeasurements={refMeasurements} />
        <div ref={bodyRef} className={`px-5 sm:ml-28 `}>
          <div className=" md:max-w-screen-md md:mx-auto">
            <div ref={aboutRef}>
              <About />
            </div>
            <div ref={projectsRef}>
              <Projects />
            </div>
            <div ref={resumeRef}>
              <Resume />
            </div>
            <div ref={contactRef}>
              <Contact />
            </div>
          </div>
          <ScrollButton below={200} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
