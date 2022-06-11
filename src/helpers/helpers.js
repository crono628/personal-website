import { createContext } from 'react';

const initialState = {
  about: false,
  projects: false,
  resume: false,
  contacts: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'about':
      return { ...state, about: true };
    case 'projects':
      return { ...state, projects: true };
    case 'resume':
      return { ...state, resume: true };
    case 'contact':
      return { ...state, contacts: true };
    case 'reset':
      return { initialState };

    default:
      throw new Error('reducer error');
  }
}

const LoadedContext = createContext();

export { initialState, reducer, LoadedContext };
