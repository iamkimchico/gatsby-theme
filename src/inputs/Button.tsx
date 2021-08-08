import React from 'react';
import styled, { css } from 'styled-components';
import { TColorScheme, TSizeNames } from '../types';

type TProps = {
  size?: TSizeNames;
  margin?: TSizeNames;
  variant?: string;
  colorScheme: TColorScheme;
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
  font-size: 1em;
  text-decoration: none;
  font-weight: 600;
  font-family: ${({ theme }) => theme.design.primary_font};
  outline: none;
  border: none;
  cursor: pointer;
  padding-left: 2em;
  padding-right: 2em;
  height: 3em;
  width: max-content;
  transition: all 0.2s ease-in-out;

  ${({ variant, theme, colorScheme }) => {
    switch (variant) {
      case 'cta':
        return css``;
      default:
        return css`
          /* border-radius: 3em; */
          background-color: ${theme.design[`${colorScheme}_color`]};
          color: ${theme.design.white_color};
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
          &:hover {
            transform: translateY(-0.2em);
          }
        `;
    }
  }}
`;

const Button: React.FC<TProps> = ({ children, size, margin, variant, colorScheme }) => (
  <StyledWrapper size={size} margin={margin}>
    <StyledButton colorScheme={colorScheme} variant={variant}>
      {children}
    </StyledButton>
  </StyledWrapper>
);

export default Button;
