import React, { useEffect, useReducer } from 'react';
import { initialState, reducer } from '../helpers/helpers';
import MainMenu from './subcomponents/MainMenu';

const Body = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {}, [state]);

  const dispatcher = {
    about: () => dispatch({ type: 'about' }),
    projects: () => dispatch({ type: 'projects' }),
    resume: () => dispatch({ type: 'resume' }),
    contact: () => dispatch({ type: 'contact' }),
  };

  return (
    <>
      <MainMenu state={state} dispatcher={dispatcher} />
    </>
  );
};

export default Body;
