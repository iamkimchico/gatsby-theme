import React, { createContext } from 'react';
import initialState from './initialState';

const UiContext = createContext(initialState);

const UiProvider:React.FC = ({ children }) => {
  const modifiedState = initialState;

  return <UiContext.Provider value={modifiedState}>{children}</UiContext.Provider>;
};

export default UiContext;
export { UiProvider };
