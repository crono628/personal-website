import React, { useContext, useEffect, useRef, useState } from 'react';
import { Avatar, Grow, Slide, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LoadedContext } from '../helpers/helpers';

const Header = ({ onLoad, headshot, timer }) => {
  const loaded = useContext(LoadedContext);
  const boxRef = useRef(null);

  return (
    <Box
      className={timer && loaded ? 'top-left' : ''}
      sx={{
        p: 4,
        display: 'flex',
        flex: 1,
        position: 'absolute',
        overflowX: 'hidden',
      }}
      ref={boxRef}
    >
      <Grow in={loaded} timeout={1000}>
        <Avatar
          sx={{ width: '7rem', minHeight: '7rem' }}
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
          <Typography pl={2} fontSize={'2.2rem'}>
            Michael DeSantis
          </Typography>
        </Slide>
      </Box>
    </Box>
  );
};

export default Header;
