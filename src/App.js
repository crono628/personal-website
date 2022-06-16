import { Paper } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import { LoadedContext, PaperContext } from './helpers/helpers';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [img, setImg] = useState([]);
  const [timer, setTimer] = useState(false);
  const paperRef = useRef('');

  useEffect(() => {
    const img0 = require('./img/headshot.png');
    const img01 = require('./img/MichaelDeSantisResume.png');
    setImg(img.concat(img0, img01));
    if (loaded) {
      setTimeout(() => {
        setTimer(true);
      }, 2000);
    }
  }, [loaded]);

  const handleOnLoad = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  };

  return (
    <Container maxWidth="md">
      <Paper
        ref={paperRef}
        sx={{
          backgroundColor: '#01579b',
          minHeight: '85vh',
          minHeight: '650px',
          my: 3,
          pb: 10,
          overflowX: 'hidden',
          width: '100%',
        }}
      >
        <LoadedContext.Provider value={loaded}>
          <PaperContext.Provider value={paperRef}>
            <Header onLoad={handleOnLoad} headshot={img[0]} timer={timer} />
            <Body resume={img[1]} />
          </PaperContext.Provider>
        </LoadedContext.Provider>
      </Paper>
    </Container>
  );
};

export default App;
