import React from 'react';
import styled, { css } from 'styled-components';

type TProps = {
  url:string;
  target:string;
  size:string;
  margin:string;
  direction:string;
  onClick:() => {};
  onHover:() => {};
  variant:string;
  style:string;
}

type TStyledWrapper = {
  margin:string;
  size:string;
}
type TStyledInner = {
  direction:string;
  variant:string;
  style:string;
}

const StyledWrapper = styled.span<TStyledWrapper>`
  position: relative;
  cursor: pointer;
  ${({ theme, margin, size }) => css`
    z-index: ${theme.base.zLevels[2]};
    margin-top: ${theme.base.spacing[margin]};
    margin-bottom: ${theme.base.spacing[margin]};
    font-size: ${size === 'large' ? '2em' : size === 'medium' ? '1.5em' : '1em'};
  `}
`;

const StyledInnerWrapper = styled.span<TStyledInner>`
  position: relative;
  cursor: pointer;
  ${({ theme, variant, direction, style }) => {
    switch (variant) {
      case 'cta':
        return css`
          background-color: ${theme.design[`${style}_color`]};
          padding: 0.5em;
          padding-left: 1em;
          padding-right: 1em;
          border-radius: 0.3em;
        `;
      default:
        return css`
          &:after,
          &:before {
            content: '';
            position: absolute;
            background-color: ${theme.design[`${style}_color`]};
            width: 0.2em;
            height: 0.8em;
            border-radius: 0px;
            left: ${direction === "left" ? '0' : '100%'};
          }
          &:before {
            bottom: 50%;
            transform: ${direction === "left"
              ? 'translateX(-1.2em) translateY(0.1em) rotate(45deg)'
              : 'translateX(1.2em) rotate(-45deg)'};
            transform-origin: 100% 100%;
          }

          &:after {
            top: 50%;
            transform: ${direction === "left"
              ? 'translateX(-1.2em) translateY(-0.1em) rotate(-45deg)'
              : 'translateX(1.2em) rotate(45deg)'};
            transform-origin: 100% 0;
          }
        `;
    }
  }}
`;

const StyledButton = styled.button`
  font-size: 1em;
  text-decoration: none;
  outline: none;
  background: none;
  border: none;
  font-family: ${({ theme }) => theme.design.primary_font}!important;
  font-weight: 600 !important;
  cursor: pointer;
`;

const Button:React.FC<TProps> = ({ children, size, margin, direction, onClick, onHover, variant, style }) => (
    <StyledWrapper size={size} margin={margin} onClick={onClick} onMouseEnter={onHover}>
      <StyledInnerWrapper direction={direction} variant={variant} style={style}>
        <StyledButton>{children}</StyledButton>
      </StyledInnerWrapper>
    </StyledWrapper>
  );

export default Button;
