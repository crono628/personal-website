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

  function handleX() {
    let copy = { ...choice };
    Object.keys(copy).map((key) => (copy[key] = false));
    return copy;
  }

  function handleCancel() {
    setChoice(handleX);
    setTimeout(() => {
      dispatcher.allTrue();
    }, 175);
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
      {allFalse && (
        <Fade in={allFalse} timeout={400}>
          <Box
            sx={{
              display: !allFalse ? 'none' : 'flex',
              mt: '-55px',
              justifyContent: 'center',
            }}
          >
            {choice.about ? (
              <FlexBox>
                <IconButton sx={cancelStyles} onClick={handleCancel}>
                  <ArrowBackIcon />
                </IconButton>
                <About />
              </FlexBox>
            ) : choice.projects ? (
              <FlexBox>
                <IconButton sx={cancelStyles} onClick={handleCancel}>
                  <ArrowBackIcon />
                </IconButton>
                <Projects />
              </FlexBox>
            ) : choice.resume ? (
              <FlexBox>
                <IconButton sx={cancelStyles} onClick={handleCancel}>
                  <ArrowBackIcon />
                </IconButton>
                <Resume resume={resume} />
              </FlexBox>
            ) : choice.contact ? (
              <FlexBox>
                <IconButton sx={cancelStyles} onClick={handleCancel}>
                  <ArrowBackIcon />
                </IconButton>
                <Contact />
              </FlexBox>
            ) : null}
          </Box>
        </Fade>
      )}
    </>
  );
};

export default Body;
