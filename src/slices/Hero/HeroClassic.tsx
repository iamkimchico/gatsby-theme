import React from 'react';
import styled, { css } from 'styled-components';
import { getColors } from '../../helpers';
import { Heading } from '../../typography';
import { Image } from '../../media';

const StyledWrapper = styled.div`
  margin-top: 5em;
  width: 100%;
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  min-height: 20em;
  height: 70vh;
  max-height: 70em;
  display: grid;
  align-items: center;
  justify-items: center;
  > * {
    grid-area: 1/1/2/2;
  }
  h1 {
    padding: 10%;
    max-width: 8em;
    position: relative;
    margin: auto;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 800;
  }

  ${({ theme }) => css`
    @media ${theme.base.media.SM} {
      h1 {
        padding: 10%;
        max-width: 100%;
      }
    }

    @media ${theme.base.media.XL} {
      h1 {
        font-size: 6em;
        position: relative;
        z-index: ${theme.base.zLevels[3]};
      }
    }

    @media ${theme.base.media.MX} {
      grid-column-start: edge-left;
      grid-column-end: edge-right;
    }
  `}
`;

const HeroClassic: React.FC = ({ primary }: any) => {
  const colors = getColors(primary.color_scheme);
  return (
    <StyledWrapper>
      <Image url={primary.image.url} size="cover" position="center center" alt="" />
      <Heading size="h1" color={colors.base} align="center">
        {primary.header}
      </Heading>
    </StyledWrapper>
  );
};

export default HeroClassic;
