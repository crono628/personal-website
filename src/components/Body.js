import { Box, Fade, styled } from '@mui/material';
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
                <ArrowBackIcon onClick={handleCancel} sx={cancelStyles} />
                <About />
              </FlexBox>
            ) : choice.projects ? (
              <FlexBox>
                <ArrowBackIcon onClick={handleCancel} sx={cancelStyles} />
                <Projects />
              </FlexBox>
            ) : choice.resume ? (
              <FlexBox>
                <ArrowBackIcon onClick={handleCancel} sx={cancelStyles} />
                <Resume resume={resume} />
              </FlexBox>
            ) : choice.contact ? (
              <FlexBox>
                <ArrowBackIcon onClick={handleCancel} sx={cancelStyles} />
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
