import { Box, Fade } from '@mui/material';
import React, { useReducer } from 'react';
import { initialState, reducer } from '../helpers/helpers';
import About from './subcomponents/About';
import MainMenu from './subcomponents/MainMenu';

const Body = ({}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const allTrue = Object.values(state).every((choice) => choice === true);

  const dispatcher = {
    about: () => dispatch({ type: 'about' }),
    projects: () => dispatch({ type: 'projects' }),
    resume: () => dispatch({ type: 'resume' }),
    contact: () => dispatch({ type: 'contact' }),
  };

  return (
    <>
      <MainMenu state={state} dispatcher={dispatcher} />
      <Fade in={!allTrue && state.about}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* <About /> */}
        </Box>
      </Fade>
    </>
  );
};

export default Body;
