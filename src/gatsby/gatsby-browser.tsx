import { GatsbyBrowser } from 'gatsby';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import PageWrapper from '../common/PageWrapper';
import { UiProvider } from '../context/UiContext';
import { extractTheme } from '../helpers';
import Baseline from '../styles/Baseline';
import base from '../styles/base';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ props, element }) => {
  const meta = { ...(props.pageContext.meta as Record<string, unknown>), url: props.location.pathname };

  const theme = {
    base,
    design: extractTheme(props.pageContext.settings),
  };

  console.log(props.pageContext.settings);
  return (
    <ThemeProvider theme={theme}>
      <Baseline />
      <PageWrapper meta={meta}>{element}</PageWrapper>
    </ThemeProvider>
  );
};

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => <UiProvider>{element}</UiProvider>;
