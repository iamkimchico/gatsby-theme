import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useViewport } from '../hooks';
import { TAlignNames, TSizeNames, TStyleNames } from '../types';

type TProps = {
  size:React.ElementType;
  style?:TStyleNames;
  align?:TAlignNames;
  margin?:TSizeNames;
}

const StyledHeading = styled.h1<Partial<TProps>>`
  line-height: 1em;
  letter-spacing: 'initial';

  ${(props) => css`
    margin-top: ${props.theme.base.spacing[props.margin || "XS"]};
    margin-bottom: ${props.theme.base.spacing[props.margin || "XS"]};
    font-family: ${props.theme.design.primary_font};
    color: ${props.theme.design[`${props.style}_color`]};
    text-align: ${props.align};
  `}

  ${(props) => {
    switch (props.size) {
      case 'special':
        return css`
          font-size: 4.5em;
          line-height: 0.99em;
          font-family: ${props.theme.design.special_font};
          text-transform: none;
          @media ${props.theme.base.media.large} {
            font-size: 5.5em;
          }
        `;
      case 'h1':
        return css`
          font-size: 5em;
          font-weight: 600;
        `;
      case 'h2':
        return css`
          text-transform: uppercase;
          font-weight: bold;
          font-style: italic;
          font-size: 4.5em;
        `;
      case 'h3':
        return css`
          font-size: 3.4em;
        `;
      case 'h4':
        return css`
          font-size: 2em;
          text-transform: uppercase;
          font-style: italic;
          font-weight: bold;
        `;
      case 'h5':
        return css`
          font-size: 1.87em;
          font-weight: 400;
        `;
      case 'h6':
        return css`
          font-size: 1.2em;
          font-weight: bold;
        `;
      default:
        return css``;
    }
  }};
`;

const Heading:React.FC<TProps> = ({ size, style, children, align, margin }) => {
  const breakpoint = useViewport();
  useEffect(() => {
    // render on every breakpoint change
  }, [breakpoint]);
  return (
    <StyledHeading
      as={size}
      style={style}
      align={align}
      size={size}
      margin={margin}
    >
      {children}
    </StyledHeading>
  );
};

export default Heading;
