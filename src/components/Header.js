import React, { useContext, useEffect, useRef, useState } from 'react';
import { Avatar, Grow, Slide, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LoadedContext } from '../helpers/helpers';

const Header = ({ onLoad, headshot, timer }) => {
  const loaded = useContext(LoadedContext);
  const [dev, setDev] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        setDev(true);
      }, 200);
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
    >
      <Grow in={loaded} timeout={400}>
        <Avatar
          sx={{ width: '4.5rem', minHeight: '4.5rem' }}
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
          overflowX: 'hidden',
          pt: 1,
        }}
        ref={boxRef}
      >
        <Slide
          in={loaded}
          direction="right"
          timeout={400}
          container={boxRef.current}
        >
          <Typography pl={2} fontSize={'1.2rem'}>
            Michael DeSantis
          </Typography>
        </Slide>

        <Slide
          in={loaded && dev}
          direction="right"
          timeout={400}
          container={boxRef.current}
        >
          <Typography pl={2} fontSize={'1.2rem'}>
            Full Stack Web Developer
          </Typography>
        </Slide>
      </Box>
    </Box>
  );
};

export default Header;
