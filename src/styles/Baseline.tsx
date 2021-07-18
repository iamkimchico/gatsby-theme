import React from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle, css, withTheme } from 'styled-components';
import { getFontSize } from '../helpers';

const GlobalStyles = createGlobalStyle`
  ${({ theme }) =>
    css`
      html,
      body {
        font-size: ${getFontSize('XS')};
        font-family: ${theme?.design?.primary_font};
        @media ${theme.base.media.SM} {
          font-size: ${getFontSize('SM')};
        }
        @media ${theme.base.media.MD} {
          font-size: ${getFontSize('MD')};
        }
        @media ${theme.base.media.LG} {
          font-size: ${getFontSize('LG')};
        }
        @media ${theme.base.media.XL} {
          font-size: ${getFontSize('XL')};
        }
        @media ${theme.base.media.MX} {
          font-size: ${getFontSize('MX')};
        }
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
      }
    `}
`;

const Baseline = ({ theme }: any) => {
  const primaryFont = theme?.design?.primary_font;
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={`https://fonts.googleapis.com/css2?family=${primaryFont}:ital,wght@0,400;0,700;1,800&display=swap`}
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
    </>
  );
};

export default withTheme(Baseline);
