import { Box, Fade, styled } from '@mui/material';
import React, { useReducer, useState } from 'react';
import { initialState, reducer } from '../helpers/helpers';
import About from './subcomponents/About';
import MainMenu from './subcomponents/MainMenu';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Projects from './subcomponents/Projects';
import Resume from './subcomponents/Resume';
import Contact from './subcomponents/Contact';

const FlexBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
});

const Body = ({}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const allFalse = Object.values(state).every((item) => item === false);
  const [choice, setChoice] = useState({
    about: false,
    projects: false,
    resume: false,
    contact: false,
  });

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
    }, 150);
  }

  const cancelStyles = { alignSelf: 'flex-end', cursor: 'pointer' };

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
              // position: 'absolute',
              // top: '100px',
              // left: 0,
              // right: 0,
              justifyContent: 'center',
            }}
          >
            {choice.about ? (
              <FlexBox>
                <CancelOutlinedIcon onClick={handleCancel} sx={cancelStyles} />
                <About />
              </FlexBox>
            ) : choice.projects ? (
              <FlexBox>
                <CancelOutlinedIcon onClick={handleCancel} sx={cancelStyles} />
                <Projects />
              </FlexBox>
            ) : choice.resume ? (
              <FlexBox>
                <CancelOutlinedIcon onClick={handleCancel} sx={cancelStyles} />
                <Resume />
              </FlexBox>
            ) : choice.contact ? (
              <FlexBox>
                <CancelOutlinedIcon onClick={handleCancel} sx={cancelStyles} />
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
