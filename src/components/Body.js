import { Box, Fade, IconButton, styled } from '@mui/material';
import React, { useReducer, useState } from 'react';
import { initialState, reducer } from '../helpers/helpers';
import About from './subcomponents/About';
import MainMenu from './subcomponents/MainMenu';
import Projects from './subcomponents/Projects';
import Resume from './subcomponents/Resume';
import Contact from './subcomponents/Contact';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const FlexBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
});

const boxStyles = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  mt: '-55px',
};

const Body = ({ resume }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [choice, setChoice] = useState({
    about: false,
    projects: false,
    resume: false,
    contact: false,
  });

  const allFalse = Object.values(state).every((item) => item === false);

  function handleChoice(key) {
    setChoice({ ...choice, [key]: true });
  }

  function handleBack() {
    let copy = { ...choice };
    Object.keys(copy).map((key) => (copy[key] = false));
    return copy;
  }

  function handleCancel() {
    setChoice(handleBack);
    setTimeout(() => {
      dispatcher.allTrue();
    }, 300);
  }

  const cancelStyles = {
    alignSelf: 'flex-start',
    cursor: 'pointer',
    pb: 1,
    mt: 2,
    fontSize: '2rem',
    '&:hover, &.Mui-focusVisible': {
      transition: '0.3s',
      color: '#397BA6',
      backgroundColor: '#4f83cc',
    },
  };

  const dispatcher = {
    about: () => dispatch({ type: 'about' }),
    projects: () => dispatch({ type: 'projects' }),
    resume: () => dispatch({ type: 'resume' }),
    contact: () => dispatch({ type: 'contact' }),
    allTrue: () => dispatch({ type: 'allTrue' }),
    allFalse: () => dispatch({ type: 'allFalse' }),
  };

  return (
    <>
      <MainMenu
        state={state}
        dispatcher={dispatcher}
        setChoice={handleChoice}
      />
      {/* map and render components*/}
      {Object.keys(choice).map((key) => {
        return (
          <Fade
            key={key}
            timeout={400}
            in={choice[key] && allFalse}
            mountOnEnter
            unmountOnExit
          >
            <Box sx={boxStyles}>
              <IconButton sx={cancelStyles} onClick={handleCancel}>
                <ArrowBackIcon
                  sx={{
                    fontSize: '2rem',
                  }}
                />
              </IconButton>
              {key === 'about' && <About />}
              {key === 'projects' && <Projects />}
              {key === 'resume' && <Resume resume={resume} />}
              {key === 'contact' && <Contact />}
            </Box>
          </Fade>
        );
      })}
    </>
  );
};

export default Body;
