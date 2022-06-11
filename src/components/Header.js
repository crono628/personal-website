import React, { useEffect, useState } from 'react';
import { Avatar, Grow, Slide, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Header = ({ onLoad, loaded }) => {
  const [timer, setTimer] = useState(false);
  const [img, setImg] = useState([]);
  useEffect(() => {
    const img0 = require('../img/headshot.png');
    setImg(img.concat(img0));
    const unsub = () => {
      if (loaded) {
        setTimeout(() => {
          setTimer(true);
        }, 2000);
      }
    };
    console.log('render');
    return unsub();
  }, [loaded]);

  return (
    <Box
      className={timer && loaded ? 'top-left' : ''}
      sx={{
        mt: 3,
        p: 4,
        display: 'flex',
        flex: 1,
      }}
    >
      <Grow in={loaded} timeout={1000}>
        <Avatar
          sx={{ width: '7rem', minHeight: '7rem' }}
          alt="Michael DeSantis"
          src={img[0]}
          onLoad={onLoad}
          className={loaded ? 'visible' : 'hidden'}
        />
      </Grow>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <Slide in={loaded} direction="left" timeout={700}>
          <Typography w={'100vh'} pl={2} fontSize={'2.2rem'}>
            Michael DeSantis
          </Typography>
        </Slide>
      </Box>
    </Box>
  );
};

export default Header;
