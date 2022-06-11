import {
  Box,
  Card,
  CardContent,
  Slide,
  styled,
  Typography,
} from '@mui/material';
import React, { useEffect, useState, useContext } from 'react';
import { LoadedContext } from '../helpers/helpers';

const cardStyles = { width: '200px', alignSelf: 'center', m: 1 };

const StyledTypography = styled(Typography)({
  color: '#002f6c',
  fontSize: '1.5rem',
});

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  cursor: 'pointer',
});

const MainMenu = () => {
  const [timer, setTimer] = useState(false);
  const loaded = useContext(LoadedContext);
  useEffect(() => {
    const unsub = () => {
      if (loaded) {
        setTimeout(() => {
          setTimer(true);
        }, 2000);
      }
    };
    return unsub();
  }, [loaded]);
  return (
    <Slide in={loaded && timer} direction="left" timeout={500}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 5,
          mb: 3,
          position: 'relative',
          bottom: '100px',
        }}
      >
        <Card sx={cardStyles} onClick={() => setTimer((prev) => !prev)}>
          <StyledCardContent>
            <StyledTypography>About</StyledTypography>
          </StyledCardContent>
        </Card>
        <Card sx={cardStyles}>
          <StyledCardContent>
            <StyledTypography>Projects</StyledTypography>
          </StyledCardContent>
        </Card>
        <Card sx={cardStyles}>
          <StyledCardContent>
            <StyledTypography>Resume</StyledTypography>
          </StyledCardContent>
        </Card>
        <Card sx={cardStyles}>
          <StyledCardContent>
            <StyledTypography>Contact</StyledTypography>
          </StyledCardContent>
        </Card>
      </Box>
    </Slide>
  );
};

export default MainMenu;
