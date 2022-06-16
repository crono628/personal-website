import React, { useContext, useEffect, useRef, useState } from 'react';
import { Avatar, Grow, Slide, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LoadedContext } from '../helpers/helpers';

const Header = ({ onLoad, headshot, timer }) => {
  const loaded = useContext(LoadedContext);
  const [dev, setDev] = useState(false);
  const boxRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        setDev(true);
      }, 1900);
    }
  }, [loaded]);

  return (
    <Box
      className={timer && loaded ? '' : ''}
      sx={{
        p: 3,
        display: 'flex',
        position: 'absolute',
        overflowX: 'hidden',
      }}
      ref={boxRef}
    >
      <Grow in={loaded} timeout={1000}>
        <Avatar
          sx={{ width: '5rem', minHeight: '5rem' }}
          alt="Michael DeSantis"
          src={headshot}
          onLoad={onLoad}
          className={loaded ? 'visible' : 'hidden'}
        />
      </Grow>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflowX: 'hidden',
        }}
      >
        <Slide
          in={loaded}
          direction="right"
          timeout={700}
          container={boxRef.current}
        >
          <Box ref={nameRef}>
            <Typography pl={2} fontSize={'1.2rem'}>
              Michael DeSantis
            </Typography>
          </Box>
        </Slide>
        {dev && (
          <Slide
            in={loaded}
            direction="right"
            timeout={700}
            container={nameRef.current}
          >
            <Typography pl={2} fontSize={'1.2rem'}>
              Full Stack Developer
            </Typography>
          </Slide>
        )}
      </Box>
    </Box>
  );
};

export default Header;
