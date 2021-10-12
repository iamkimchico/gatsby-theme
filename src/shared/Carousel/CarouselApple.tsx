import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Grid from '../../common/Grid';
import { Body, Heading } from '../../typography';
import { getColors, getColPadding } from '../../helpers';
import { useViewport } from '../../hooks';
import { TSizeNames } from '../../types';
import Arrow from '../Arrow/Arrow';

type TProps = {
  header: string;
  paragraph: string;
  color: string;
};

const StyledWrapper = styled.div`
  /* position: relative; */
  height: 40em;
`;
const StyledHeader = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 1em;
`;

const StyledCarousel = styled(Grid)`
  position: absolute;
  width: 100vw;
  left: 0;
`;
const StyledItems = styled.div<{ viewport: TSizeNames }>`
  ${({ theme, viewport }) => css`
    grid-column-start: edge-left;
    grid-column-end: edge-right;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    scroll-snap-type: x mandatory;
    margin-top: 2em;
    > div {
      scroll-snap-align: start;
      display: inline-block;
      &:last-of-type {
        margin-right: ${getColPadding('outer-xxx', viewport)};
      }
      > div {
        transform: ${`translateX(${getColPadding('outer-xxx', viewport)})`};
      }

      @media${theme.base.media.MX} {
        transform: ${`translateX(${getColPadding('outer-xx', viewport)})`};
      }
    }
  `}
`;

const CarouselApple: React.FC<TProps> = ({ header, paragraph, children, color }) => {
  const colors = getColors(color);
  const viewport = useViewport().size;

  return (
    <StyledWrapper>
      <StyledHeader>
        <Heading size="h3" color={colors.major} align="center">
          {header}
        </Heading>
        {paragraph && <Body color={colors.black}>{paragraph}</Body>}
      </StyledHeader>

      <StyledCarousel>
        <Arrow direction="left" variant="circle" onClick={() => console.log('click')} />
        <StyledItems viewport={viewport}>
          {React.Children.map(children, (child) => (
            <div>{child}</div>
          ))}
        </StyledItems>
        <Arrow direction="right" variant="circle" onClick={() => console.log('click')} />
      </StyledCarousel>
      {/* <StyledDots /> */}
    </StyledWrapper>
  );
};

export default CarouselApple;
