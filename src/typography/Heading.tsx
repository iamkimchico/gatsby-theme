import React, { useEffect } from 'react';

import styled, { css } from 'styled-components';
import { useViewport } from '../hooks';
import { TAlignNames, TSizeNames } from '../types';

type TProps = {
  size: React.ElementType;
  color: string;
  align?: TAlignNames;
  margin?: TSizeNames;
  variation?: 'normal' | 'special';
  className?: any;
};
const StyledWrapper = styled.span<Partial<TProps>>`
  display: block;
  ${({ theme, margin }) => css`
    /* margin-top: ${theme.base.spacing[margin || 'XS']}; */
    margin-bottom: ${theme.base.spacing[margin || 'XS']};
  `}
`;

const StyledHeading = styled.h1<Partial<TProps>>`
  letter-spacing: 'initial';
  ${({ align, color }) => css`
    color: ${color};
    text-align: ${align};
  `}

  ${({ size }) => {
    switch (size) {
      case 'h1':
        return css`
          font-size: 5em;
          font-weight: 700;
          font-style: normal;
        `;
      case 'h2':
        return css`
          text-transform: uppercase;
          font-style: italic;
          font-size: 4.5em;
          font-weight: 700;
        `;
      case 'h3':
        return css`
          font-size: 3.4em;
          font-weight: 700;
          font-style: normal;
        `;
      case 'h4':
        return css`
          font-size: 2em;
          text-transform: uppercase;
          font-style: italic;
          font-weight: 800;
        `;
      case 'h5':
        return css`
          font-size: 1.87em;
          font-weight: 500;

          font-style: normal;
        `;
      case 'h6':
        return css`
          font-size: 1.2em;
          font-weight: 700;
          font-style: normal;
        `;
      default:
        return css``;
    }
  }};

  ${({ theme, variation }) => {
    switch (variation) {
      case 'special':
        return css`
          line-height: 0.89em;
          font-family: ${theme.design.special_font};
          text-transform: none;
          font-style: normal;
        `;

      default:
        return css`
          line-height: 1em;
          font-family: ${theme.design.primary_font}, sans-serif;
        `;
    }
  }}
`;

const Heading: React.FC<TProps> = ({ size, children, align, margin, variation, color, className }) => {
  const breakpoint = useViewport();
  useEffect(() => {
    // render on every breakpoint change
  }, [breakpoint]);
  return (
    <StyledWrapper margin={margin}>
      <StyledHeading as={size} color={color} align={align} size={size} variation={variation} className={className}>
        {children}
      </StyledHeading>
    </StyledWrapper>
  );
};

export default Heading;
