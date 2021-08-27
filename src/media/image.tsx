import React from 'react';
import styled, { css } from 'styled-components';
import { TBgPositions, TBgSizes } from '../types';

type TProps = {
  url: string;
  size: TBgSizes;
  position: TBgPositions;
  helpText?: string;
  alt: string;
};

const StyledImage = styled.figure<Partial<TProps>>`
  width: 100%;
  height: 100%;
  position: relative;
  background-repeat: no-repeat;
  border-radius: 0.5em;
  ${({ size, position, url }) =>
    css`
      background-size: ${size};
      background-position: ${position};
      background-image: url(${url});
    `}
`;

const Image: React.FC<TProps> = ({ url, size, children, position, helpText, alt }) => (
  <>
    <StyledImage url={url} size={size} position={position}>
      {children}
    </StyledImage>
    {helpText && (
      <div>{helpText}</div>
      // <HelpText floating align="center" margin="small">
      //   {helpText}
      // </HelpText>
    )}
  </>
);

export default Image;
