import {
  Box,
  Card,
  CardContent,
  Paper,
  Slide,
  styled,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

const StyledTypography = styled(Typography)({
  color: '#002f6c',
});

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  cursor: 'pointer',
});

const Body = ({ loaded }) => {
  const [timer, setTimer] = useState(false);
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
        }}
      >
        <Card sx={{ width: '200px', alignSelf: 'center', m: 1 }}>
          <StyledCardContent>
            <StyledTypography>About</StyledTypography>
          </StyledCardContent>
        </Card>
        <Card sx={{ width: '200px', alignSelf: 'center', m: 1 }}>
          <StyledCardContent>
            <StyledTypography>About</StyledTypography>
          </StyledCardContent>
        </Card>
        <Card sx={{ width: '200px', alignSelf: 'center', m: 1 }}>
          <StyledCardContent>
            <StyledTypography>About</StyledTypography>
          </StyledCardContent>
        </Card>
      </Box>
    </Slide>
  );
};

export default Body;
