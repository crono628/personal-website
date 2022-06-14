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

const MainMenu = ({ state, dispatcher }) => {
  const [timer, setTimer] = useState(false);
  const loaded = useContext(LoadedContext);
  const allTrue = Object.values(state).every((choice) => choice === true);
  const paperRef = useContext(PaperContext);

  useEffect(() => {
    const unsub = () => {
      if (loaded) {
        setTimeout(() => {
          setTimer(true);
        }, 1900);
      }
    };

    return unsub();
  }, [loaded]);

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
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
          position: 'relative',
          top: '100px',
        }}
      >
        {Object.keys(dispatcher).map((key, index) => {
          return (
            <Fade in={allTrue || state[key]} key={index}>
              <Card
                sx={{
                  ...cardStyles,
                }}
                onClick={dispatcher[key]}
              >
                <StyledCardContent>
                  <StyledTypography>{capitalize(key)}</StyledTypography>
                </StyledCardContent>
              </Card>
            </Fade>
          );
        })}
      </Box>
    </Slide>
  );
};

export default MainMenu;
