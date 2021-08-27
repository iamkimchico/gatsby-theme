import React from 'react';
import styled, { css, useTheme } from 'styled-components';

import { useScroll, useViewport } from '../../hooks';
import { TSizeNames } from '../../types';
import { Heading } from '../../typography';
import { toPerfectPixel } from '../../utils';

type TProps = {
  onClick: () => void;
  label: string;
  toggled: boolean;
};

type TStyledProps = {
  viewport: TSizeNames;
  toggled: boolean;
  isScrolled?: boolean;
  color?: string;
};

const StyledWrapper = styled.div<Partial<TStyledProps>>`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-items: center;
  gap: 0.5em;
  cursor: pointer;

  &:hover div::before {
    width: 100%;
  }
`;

const StyledBurger = styled.div<TStyledProps>`
  width: 2em;
  height: 1em;
  position: relative;

  &::before,
  &::after {
    content: '';
    transition: all 0.2s ease-in-out;
    position: absolute;

    ${({ viewport, color }) => css`
      height: ${toPerfectPixel(0.3, viewport)};
      background: ${color};
    `}
  }

  &::after {
    width: 100%;
  }

  &::before {
    width: 70%;
    top: 0.6em;
  }
`;

const Burgermenu: React.FC<TProps> = ({ onClick, toggled, label }) => {
  const theme = useTheme();
  const viewport = useViewport();
  const { isScrolled } = useScroll();
  const color = toggled ? theme.design.white_color : isScrolled ? theme.design.black_color : theme.design.white_color;
  return (
    <StyledWrapper onClick={onClick} toggled={toggled}>
      <Heading size="h6" color={color}>
        {label}
      </Heading>
      <StyledBurger toggled={toggled} viewport={viewport.size} isScrolled={isScrolled} color={color} />
    </StyledWrapper>
  );
};

export default Burgermenu;
