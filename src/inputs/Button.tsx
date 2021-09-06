import React from 'react';
import styled, { css } from 'styled-components';
import { TSizeNames } from '../types';

type TProps = {
  size?: TSizeNames;
  margin?: TSizeNames;
  variant?: string;
  color: string;
  className?: any;
  onClick?: () => void;
};

const StyledWrapper = styled.span<Partial<TProps>>`
  position: relative;
  cursor: pointer;
  ${({ theme, size }) => css`
    z-index: ${theme.base.zLevels[2]};
    font-size: ${size === 'LG' ? '2em' : size === 'MD' ? '1.5em' : '1em'};
  `}
`;

const StyledButton = styled.button<Partial<TProps>>`
  text-decoration: none;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  width: max-content;
  transition: all 0.2s ease-in-out;
  position: relative;

  ${({ theme, color, margin }) => css`
    margin-top: ${theme.base.spacing[margin || 'XS']};
    margin-bottom: ${theme.base.spacing[margin || 'XS']};
    background-color: ${color};
    color: ${theme.design.white_color};
    font-family: ${theme.design.primary_font};
  `}

  ${({ theme, variant, color }) => {
    switch (variant) {
      case 'cta':
        return css`
          font-size: 1em;
          height: 3em;
          padding-left: 2em;
          padding-right: 2em;
          color: ${theme.design.black_color};
        `;
      case 'link':
        return css`
          font-size: 1.1em;
          color: ${color};
          background-color: transparent;
          &:after,
          &:before {
            content: '';
            position: absolute;
            background-color: ${color};
            width: 0.2em;
            height: 0.8em;
            border-radius: 0px;
            right: 0;
          }
          &:before {
            bottom: 50%;
            transform: translateX(1.2em) translateY(0em) rotate(-45deg);
            transform-origin: 100% 100%;
          }

          &:after {
            top: 50%;
            transform: translateX(1.2em) translateY(0.05em) rotate(45deg);
            transform-origin: 100% 0;
          }
        `;
      default:
        return css`
          font-size: 0.8em;
          padding-left: 2.5em;
          padding-right: 2.5em;
          height: 3.5em;

          border-radius: 3em;
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
          &:hover {
            transform: translateY(-0.2em);
            box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
          }
        `;
    }
  }}
`;

const Button: React.FC<TProps> = ({ children, size, margin, variant, color, className, onClick }) => (
  <StyledWrapper size={size}>
    <StyledButton color={color} variant={variant} margin={margin} className={className} onClick={onClick}>
      {children}
    </StyledButton>
  </StyledWrapper>
);

export default Button;
