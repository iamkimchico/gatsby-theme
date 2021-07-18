import React from 'react';
import styled, { css } from 'styled-components';
import { TAlignNames, TSizeNames, TColorScheme } from '../types';

type TProps = {
  colorScheme: TColorScheme;
  size?: TSizeNames;
  align?: TAlignNames;
  italic?: boolean;
  bold?: boolean;
  margin?: TSizeNames;
};

const StyledBody = styled.p<Partial<TProps>>`
  line-height: 1.5em;
  ${({ theme, align, bold, colorScheme, margin }) => css`
    color: ${theme.design[`${colorScheme}_color`]};
    font-family: ${theme.design.primary_font};
    margin-top: ${theme.base.spacing[margin || 'XS']};
    margin-bottom: ${theme.base.spacing[margin || 'XS']};
    text-align: ${align === 'right' ? 'right' : align === 'center' ? 'center' : 'left'};
    font-weight: ${bold ? 'bold' : 200};
  `}

  ${(props) => {
    switch (props.size) {
      case 'LG':
        return css`
          font-size: 1.5em;
        `;
      case 'MD':
        return css`
          font-size: 1.2em;
        `;
      case 'SM':
        return css`
          font-size: 0.6em;
        `;
      default:
        return css`
          font-size: 1em;
        `;
    }
  }};
`;

const Body: React.FC<TProps> = ({ size, colorScheme, children, align, italic, bold, margin }) => (
  <StyledBody size={size} colorScheme={colorScheme} align={align} italic={italic} bold={bold} margin={margin}>
    {children}
  </StyledBody>
);

export default Body;
