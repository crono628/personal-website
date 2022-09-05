import React, { useEffect, useState } from 'react';

const ScrollButton = ({ below }) => {
  const [show, setShow] = useState(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (below) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > below) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <>
      <button
        className={`${
          show ? 'animate-btnIn ' : !show && loaded ? 'animate-btnOut ' : ''
        } opacity-0 z-50 sticky bottom-16 float-right mb-5  bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full`}
        onClick={handleClick}
        onAnimationEnd={() => setLoaded(true)}
      >
        Top
      </button>
    </>
  );
};

export default ScrollButton;
