import { Paper } from '@mui/material';
import { Container } from '@mui/system';
import React, { useRef, useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import { LoadedContext, PaperContext } from './helpers/helpers';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const paperRef = useRef('');

  const handleOnLoad = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  };

  return (
    <Container>
      <Paper
        ref={paperRef}
        sx={{
          backgroundColor: '#01579b',
          height: '95vh',
          my: 2,
          overflowX: 'hidden',
          width: '100%',
        }}
      >
        <LoadedContext.Provider value={loaded}>
          <PaperContext.Provider value={paperRef}>
            <Header onLoad={handleOnLoad} />
            <Body />
          </PaperContext.Provider>
        </LoadedContext.Provider>
      </Paper>
    </Container>
  );
};

export default App;
