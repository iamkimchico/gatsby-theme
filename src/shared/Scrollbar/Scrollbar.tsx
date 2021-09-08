import React, { useLayoutEffect } from 'react';
import styled, { css } from 'styled-components';
import { useResize, useScroll, useViewport } from '../../hooks';

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 9999999;
  width: 100%;
  height: 0.2em;
  top: 3em;
  left: 0;
`;

const StyledIndicator = styled.div<{ width: number }>`
  height: 100%;
  background-color: #d4c29c;
  ${({ width }) => css`
    width: ${`${width}%`};
  `}
`;

const ScrollBar = () => {
  const scroll = useScroll();
  const resize = useResize();
  return (
    <StyledWrapper>
      <StyledIndicator width={scroll.percentage} />
    </StyledWrapper>
  );
};

export default ScrollBar;
