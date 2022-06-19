import React, { useEffect, useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IconButton } from '@mui/material';

const Scroll = ({ below }) => {
  const [show, setShow] = useState(below ? false : true);
  const handleClick = () => {
    window['scrollTo']({ top: 0, behavior: 'smooth' });
  };
  const handleScroll = () => {
    if (window.pageYOffset > below) {
      if (!show) {
        setShow(true);
      }
    } else {
      if (show) {
        setShow(false);
      }
    }
  };

  useEffect(() => {
    if (below) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <>
      {show && (
        <IconButton
          sx={{
            zIndex: 2,
            position: 'fixed',
            bottom: '2vh',
            '&:hover, &.Mui-focusVisible': {
              transition: '0.3s',
              color: '#397BA6',
              backgroundColor: '#4f83cc',
            },
            right: '1.5vw',
          }}
          onClick={handleClick}
        >
          <ExpandLessIcon
            sx={{
              fontSize: '2rem',
            }}
          />
        </IconButton>
      )}
    </>
  );
};

export default Scroll;
