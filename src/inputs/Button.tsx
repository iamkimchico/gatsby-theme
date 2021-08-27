import React from 'react';
import styled, { css } from 'styled-components';
import { TSizeNames } from '../types';

type TProps = {
  size?: TSizeNames;
  margin?: TSizeNames;
  variant?: string;
  color: string;
};

const StyledWrapper = styled.span<Partial<TProps>>`
  position: relative;
  cursor: pointer;
  ${({ theme, margin, size }) => css`
    z-index: ${theme.base.zLevels[2]};
    margin-top: ${theme.base.spacing[margin || 'XS']};
    margin-bottom: ${theme.base.spacing[margin || 'XS']};
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

  ${({ theme, color }) => css`
    background-color: ${color};
    color: ${theme.design.white_color};
    font-family: ${theme.design.primary_font};
  `}

  ${({ theme, variant }) => {
    switch (variant) {
      case 'cta':
        return css`
          font-size: 1em;
          height: 3em;
          padding-left: 2em;
          padding-right: 2em;
          color: ${theme.design.black_color};
        `;
      default:
        return css`
          font-size: 0.8em;
          padding-left: 2em;
          padding-right: 2em;
          height: 3em;

          border-radius: 3em;
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
          &:hover {
            transform: translateY(-0.2em);
          }
        `;
    }
  }}
`;

const Button: React.FC<TProps> = ({ children, size, margin, variant, color }) => (
  <StyledWrapper size={size} margin={margin}>
    <StyledButton color={color} variant={variant}>
      {children}
    </StyledButton>
  </StyledWrapper>
);

export default Button;
