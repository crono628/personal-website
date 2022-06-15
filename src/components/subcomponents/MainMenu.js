import {
  Box,
  Card,
  CardContent,
  Fade,
  Slide,
  styled,
  Typography,
} from '@mui/material';
import React, { useEffect, useState, useContext, useRef } from 'react';
import { LoadedContext, PaperContext } from '../../helpers/helpers';

const cardStyles = { width: '200px', m: 1 };

const StyledTypography = styled(Typography)({
  color: '#002f6c',
  fontSize: '1.5rem',
});

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
});

const MainMenu = ({ state, dispatcher, setChoice }) => {
  const [timer, setTimer] = useState(false);
  const allFalse = Object.values(state).every((item) => item === false);
  const loaded = useContext(LoadedContext);
  const paperRef = useContext(PaperContext);

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        setTimer(true);
      }, 1900);
    }
  }, [loaded]);

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function handleClick(obj, key) {
    obj[key]();
    setChoice(key);
    setTimeout(() => {
      dispatcher.allFalse();
    }, 800);
  }

  return (
    <Slide
      in={loaded && timer}
      direction="left"
      timeout={500}
      container={paperRef.current}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mt: '150px',
        }}
      >
        {Object.keys(dispatcher).map((key, index) => {
          if (index < 4) {
            return (
              <Fade in={state[key]} key={key + index}>
                <Card
                  sx={{ ...cardStyles, display: allFalse ? 'none' : '' }}
                  onClick={() => handleClick(dispatcher, key)}
                >
                  <StyledCardContent>
                    <StyledTypography>{capitalize(key)}</StyledTypography>
                  </StyledCardContent>
                </Card>
              </Fade>
            );
          }
        })}
      </Box>
    </Slide>
  );
};

export default MainMenu;
