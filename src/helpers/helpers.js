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
  const allTrue = Object.values(state).every((choice) => choice === true);
  switch (action.type) {
    case 'about':
      return allTrue ? { ...falseState, about: true } : { ...initialState };
    case 'projects':
      return allTrue ? { ...falseState, projects: true } : { ...initialState };
    case 'resume':
      return allTrue ? { ...falseState, resume: true } : { ...initialState };
    case 'contact':
      return allTrue ? { ...falseState, contact: true } : { ...initialState };
    case 'reset':
      return { ...initialState };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

const LoadedContext = createContext();
const PaperContext = createContext();

export { initialState, reducer, LoadedContext, PaperContext };
