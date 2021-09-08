import React from 'react';
import styled, { css } from 'styled-components';
import { TBgPositions } from '../types';

type TProps = {
  url: string;
  position: TBgPositions;
};

const StyledImage = styled.figure<TProps>`
  width: 100%;
  height: 100%;
  ${({ url, position }) => css`
    background-image: ${`url(${url})`};
    background-size: cover;
    background-position: ${position};
  `}
`;
const BackgroundImage: React.FC<TProps> = ({ children, url, position }) => (
  <StyledImage url={url} position={position}>
    {children}
  </StyledImage>
);

export default BackgroundImage;
