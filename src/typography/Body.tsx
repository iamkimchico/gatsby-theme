import React from 'react';
import styled, { css } from 'styled-components';
import { TAlignNames, TSizeNames } from '../types';

type TProps = {
  color: string;
  size?: TSizeNames;
  align?: TAlignNames;
  italic?: boolean;
  bold?: boolean;
  margin?: TSizeNames;
  className?: any;
};

const StyledBody = styled.p<Partial<TProps>>`
  line-height: 1.5em;
  ${({ theme, align, bold, color, margin, italic }) => css`
    color: ${color};
    font-family: ${theme.design.secondary_font}, sans-serif;
    margin-top: ${theme.base.spacing[margin || 'XS']};
    margin-bottom: ${theme.base.spacing[margin || 'XS']};
    text-align: ${align};
    font-weight: ${bold ? 700 : 400};
    font-style: ${italic ? 'italic' : 'normal'};
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

const Body: React.FC<TProps> = ({ size, color, children, align, italic, bold, margin, className }) => (
  <StyledBody size={size} color={color} align={align} italic={italic} bold={bold} margin={margin} className={className}>
    {children}
  </StyledBody>
);

export default Body;
