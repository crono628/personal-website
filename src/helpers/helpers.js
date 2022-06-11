import { createContext } from 'react';

const initialState = {
  about: true,
  projects: true,
  resume: true,
  contact: true,
};

const falseState = {
  about: false,
  projects: false,
  resume: false,
  contact: false,
};

function reducer(state, action) {
  // const areTrue = Object.values(state);
  // console.log(areTrue);
  switch (action.type) {
    case 'about':
      return { ...falseState, about: true };
    case 'projects':
      return { ...falseState, projects: true };
    case 'resume':
      return { ...falseState, resume: true };
    case 'contact':
      return { ...falseState, contact: true };
    case 'reset':
      return { ...initialState };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

const LoadedContext = createContext();

export { initialState, reducer, LoadedContext };
