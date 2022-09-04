import React, { useEffect, useRef, useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import ScrollButton from './components/ScrollButton';

const App = () => {
  const [highlight, setHighlight] = useState([
    { about: true, projects: false, resume: false, contact: false },
  ]);
  const aboutRef = useRef();

  useEffect(() => {
    //   window.addEventListener('scroll', handleScroll);
    //   return () => window.removeEventListener('scroll', handleScroll);
    console.log('about', aboutRef.current.getBoundingClientRect().bottom);
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto bg-orange-300 min-h-screen">
      <Header />
      <div className=" sm:ml-28 ">
        <div className=" md:max-w-screen-md md:mx-auto">
          <div ref={aboutRef}>
            <About />
          </div>
        </div>
      </div>
      <ScrollButton below={200} />
    </div>
  );
};

export default App;
