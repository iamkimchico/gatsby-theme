import React from 'react';
import styled, { css } from 'styled-components';
import { Image } from '../../../media';
import { Heading } from '../../../typography';

type TProps = {
  primary:any;
}

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 9;
  min-height: 40em;
  display: grid;
  align-items: center;
  justify-items: center;
  > * {
    grid-area: 1/1/2/2;
  }

  ${({ theme }) => css`
    @media ${theme.base.media.xxlarge} {
      h1 {
        font-size: 5em;
        position: relative;
        z-index: ${theme.base.zLevels[3]};
      }
    }
  `}
`;

const HeroDefault:React.FC<TProps> = ({ primary }) => (
    <StyledWrapper>
      <Image url={primary.image.url} position="center center" size="cover"/>
      <Heading size="h1" align="center">
        {primary.header}
      </Heading>
    </StyledWrapper>
  );

export default HeroDefault;
