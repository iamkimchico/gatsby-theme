import React from 'react';
import styled, { css } from 'styled-components';

type TProps = {
  direction: 'right' | 'left';
  onClick: () => void;
  variant?: 'default' | 'circle';
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

  ${({ direction }) => {
    switch (direction) {
      case 'left':
        return css`
          &:before {
            left: 0;
            transform: translateY(0.1em) rotate(45deg);
          }
          &:after {
            left: 0;
            transform: translateY(-0.1em) rotate(-45deg);
          }
        `;
      default:
        return css`
          &:before {
            left: 100%;
            transform: rotate(-45deg);
          }
          &:after {
            left: 100%;
            transform: rotate(45deg);
          }
        `;
    }
  }}

  ${({ variant, direction }) => {
    switch (variant) {
      case 'circle':
        return css`
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 1.5em;
          padding: 1.5em;
          &:before,
          &:after {
            background-color: white;
            left: ${direction === 'left' ? '35%' : '60%'};
          }
        `;

      default:
        return css``;
    }
  }}
`;

const Arrow: React.FC<TProps> = ({ direction, onClick, variant }) => (
  <StyledArrow direction={direction} onClick={onClick} variant={variant} />
);

export default Arrow;
