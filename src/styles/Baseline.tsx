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

      &::-webkit-scrollbar {
        display: none;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
      }
    `}
`;

const Baseline = ({ theme }: any) => (
  //

  <>
    <Helmet>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link rel="stylesheet" href="https://use.typekit.net/zpz4uik.css" />
    </Helmet>
    <GlobalStyles />
  </>
);
export default withTheme(Baseline);
