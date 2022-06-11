import { Paper } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const handleOnLoad = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  };
  return (
    <Container>
      <Paper
        sx={{
          backgroundColor: '#01579b',
          height: '100%',
        }}
      >
        <Header loaded={loaded} onLoad={handleOnLoad} />
        <Body loaded={loaded} />
      </Paper>
    </Container>
  );
};

export default App;
