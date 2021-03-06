import React from 'react';
import styled, { css } from 'styled-components';
import { TSizeNames } from '../types';

type TProps = {
  size?: TSizeNames;
  margin?: TSizeNames;
  color: string;
  className?: any;
  onClick?: () => void;
  shape?: 'square' | 'rounded' | 'pill' | 'arrow';
  variant?: 'default' | 'outline' | 'soft' | 'text';
  selected?: boolean;
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

  ${({ theme, color, margin, shape, variant, selected }) => css`
    margin-top: ${theme.base.spacing[margin || 'XS']};
    margin-bottom: ${theme.base.spacing[margin || 'XS']};
    font-family: ${theme.design.primary_font};

    ${() => {
      switch (variant) {
        case 'outline':
          return css`
            background-color: transparent;
            border: solid 0.1em ${color};
          `;
        case 'soft':
          return css`
            background-color: ${selected ? color : `${color}4C`};
            color: ${selected ? theme.design.white_color : color};
            &:hover {
              color: ${theme.design.white_color};
              background-color: ${color};
            }
          `;
        case 'text':
          css``;
        default:
          return css`
            background-color: ${color};
            color: ${theme.design.white_color};
            &:hover {
              transform: translateY(-0.2em);
              box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
            }
          `;
      }
    }}

    ${() => {
      switch (shape) {
        case 'square':
          return css`
            font-size: 1em;
            height: 3em;
            padding-left: 2em;
            padding-right: 2em;
          `;
        case 'rounded':
          return css`
            font-size: 1em;
            height: 3em;
            padding-left: 2em;
            padding-right: 2em;
            border-radius: 0.2em;
          `;
        case 'arrow':
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
          return null;
      }
    }}
  `}
`;

const Button: React.FC<TProps> = ({
  children,
  size,
  margin,
  color,
  className,
  onClick,
  shape = 'square',
  variant = 'default',
  selected = false,
}) => (
  <StyledWrapper size={size}>
    <StyledButton
      selected={selected}
      color={color}
      shape={shape}
      variant={variant}
      margin={margin}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  </StyledWrapper>
);

export default Button;
