import React from 'react';
import styled, { css } from 'styled-components';
import { Image, Video } from '../../../media';
import { Heading } from '../../../typography';

type TProps = {
  primary: any;
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: edge-left;
  grid-column-end: edge-right;
  height: 70em;
  max-height: 85vh;
  display: grid;
  align-items: center;
  padding: 10em;
  /* justify-items: center; */

  > * {
    grid-area: 1/1/2/2;
  }

  h1 {
    z-index: ${({ theme }) => theme.base.zLevels[3]};
    width: 9em;
  }

  ${({ theme }) => css`
    @media ${theme.base.media.MD} {
      height: 50em;
    }
    @media ${theme.base.media.MX} {
      h1 {
        /* font-size: 5em;
        position: relative; */
        z-index: ${theme.base.zLevels[3]};
      }
    }
  `}
`;

const StyledMedia = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 70em;
  max-height: 85vh;
  border: 1em solid white;
  overflow: hidden;
  /* border-radius: 1.5em; */

  ${({ theme }) => css`
    @media ${theme.base.media.MD} {
      height: 50em;
    }
  `}
`;

const FullWidthWithBorder: React.FC<TProps> = ({ primary }) => (
  <StyledWrapper>
    {primary.image.url && <Image url={primary.image.url} position="center center" size="cover" alt="" />}
    <Heading size="h1" align="left" colorScheme="white">
      {primary.header}
    </Heading>

    <StyledMedia>
      <Video url={primary.media.url} poster="" hasOverlay />
    </StyledMedia>
  </StyledWrapper>
);

export default FullWidthWithBorder;
