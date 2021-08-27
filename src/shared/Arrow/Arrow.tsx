import React from 'react';
import styled, { css } from 'styled-components';

type TProps = {
  direction: 'right' | 'left';
  onClick: () => void;
};

const StyledArrow = styled.div<TProps>`
  position: relative;
  cursor: pointer;
  width: 1em;
  justify-self: center;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-0.2em);
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    background-color: black;
    width: 0.2em;
    height: 0.8em;
    border-radius: 0px;
  }
  &:before {
    bottom: 50%;
    transform-origin: 100% 100%;
  }

  &:after {
    top: 50%;
    transform-origin: 100% 0;
  }

  ${({ direction }) =>
    direction === 'left' &&
    css`
      &:before {
        left: 0;
        transform: translateY(0.1em) rotate(45deg);
      }
      &:after {
        left: 0;
        transform: translateY(-0.1em) rotate(-45deg);
      }
    `}
  ${({ direction }) =>
    direction === 'right' &&
    css`
      &:before {
        left: 100%;
        transform: rotate(-45deg);
      }
      &:after {
        left: 100%;
        transform: rotate(45deg);
      }
    `}
`;
const Arrow: React.FC<TProps> = ({ direction, onClick }) => <StyledArrow direction={direction} onClick={onClick} />;

export default Arrow;
