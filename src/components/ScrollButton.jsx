import React, { useEffect, useState } from 'react';

const ScrollButton = ({ below }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (below) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

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
        style={below && show ? inAnimation : outAnimation}
        className="transition-opacity fixed bottom-0 right-0 mb-5 mr-5 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleClick}
      >
        Top
      </button>
    </>
  );
};

const inAnimation = { animation: 'inAnimation 250ms ease-in' };
const outAnimation = {
  animation: 'outAnimation 270ms ease-out',
  animationFillMode: 'forwards',
};

export default ScrollButton;
