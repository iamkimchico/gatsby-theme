import { GatsbySSR } from 'gatsby';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import PageWrapper from './src/common/PageWrapper';
import { UiProvider } from './src/context/UiContext';
import { extractTheme } from './src/helpers';
import base from './src/styles/base';
import Baseline from './src/styles/Baseline';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ props, element }) => {
  const meta = { ...(props.pageContext.meta as Record<string, unknown>), url: props.location.pathname };
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

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => <UiProvider>{element}</UiProvider>;
