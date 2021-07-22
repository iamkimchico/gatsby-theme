import React, { createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import base from '../styles/base';
import Baseline from '../styles/Baseline';
import PageWrapper from '../common/PageWrapper';
import { UiProvider } from '../context/UiContext';
import { extractTheme } from '../helpers';

export const wrapPageElement = ({ props, element }: any) => {
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

export const wrapRootElement = ({ element }) => <UiProvider>{element}</UiProvider>;
