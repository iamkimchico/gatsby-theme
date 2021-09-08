import { GatsbyBrowser } from 'gatsby';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import PageWrapper from './src/common/PageWrapper';
import { UiProvider } from './src/context/UiContext';
import { extractTheme } from './src/helpers';
import Baseline from './src/styles/Baseline';
import base from './src/styles/base';

export const onInitialClientRender: GatsbyBrowser['onInitialClientRender'] = () => {
  window.scrollTo(0, 0);
};

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ props, element }) => {
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

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => <UiProvider>{element}</UiProvider>;
