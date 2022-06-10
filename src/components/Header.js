import React, { useEffect, useState } from 'react';
import { Avatar, Grow, Slide, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Header = () => {
  const [timer, setTimer] = useState(true);
  useEffect(() => {
    const unsub = () => {
      setTimeout(() => {
        setTimer(!timer);
        console.log('shrink');
      }, 2000);
    };

    return unsub;
  }, []);

  return (
    <>
      <Box
        className={!timer ? 'scale-down-tl' : ''}
        sx={{
          mt: 3,
          display: 'flex',
        }}
      >
        <Grow in={true} timeout={1000}>
          <Avatar
            sx={{ minWidth: '10rem', minHeight: '10rem' }}
            alt="Michael DeSantis"
            src={require('../img/headshot.png')}
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
          <Slide in={true} direction="left" timeout={700}>
            <Typography pl={2} fontSize={'2.2rem'}>
              Michael DeSantis
            </Typography>
          </Slide>
        </Box>
      </Box>
    </>
  );
};

export default Header;
