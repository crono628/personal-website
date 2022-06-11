import { Paper } from '@mui/material';
import { Container } from '@mui/system';
import React, { createContext, useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import { reducer, initialState, LoadedContext } from './helpers/helpers';

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
        <LoadedContext.Provider value={loaded}>
          <Header onLoad={handleOnLoad} />
          <Body />
        </LoadedContext.Provider>
      </Paper>
    </Container>
  );
};

export default App;
