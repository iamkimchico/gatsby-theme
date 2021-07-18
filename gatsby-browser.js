import React, { createContext } from 'react';
import base from './src/styles/base';
import { ThemeProvider } from 'styled-components';
import Baseline from './src/styles/Baseline';
import PageWrapper from './src/common/PageWrapper';
import { UiProvider } from './src/context/UiContext';
import { extractTheme } from './src/helpers';

export const wrapPageElement = ({ props, element }) => {
  const meta = { ...props.pageContext.meta, url: props.location.pathname };
  const theme = {
    base,
    design: extractTheme(props.pageContext.settings),
  };
  return (
    <ThemeProvider theme={theme}>
      <Baseline />
      <PageWrapper meta={meta}>{element}</PageWrapper>
    </ThemeProvider>
  );
};

export const wrapRootElement = ({ element }) => {
  return <UiProvider>{element}</UiProvider>;
};
