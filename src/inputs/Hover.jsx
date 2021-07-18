import React from 'react';
import styled, { css } from 'styled-components';
import { colors, spacing, fontFamily, zLevels, getSecondaryColor } from '../../constants';

const StyledWrapper = styled.span`
  position: relative;
  z-index: ${zLevels[2]};
  cursor: pointer;
  margin-top: ${(props) => spacing[props.margin]};
  margin-bottom: ${(props) => spacing[props.margin]};
  font-size: ${(props) => (props.size === 'large' ? '2em' : props.size === 'medium' ? '1.5em' : '1em')};

  &:after {
    content: '';
    position: absolute;
    bottom: -1em;
    left: 50%;
    width: 0.5em;
    height: 0.5em;
    border-radius: 1em;
    background-color: ${(props) => colors[getSecondaryColor(props.theme)]};
    transition: all 0.2s ease-in-out;
    opacity: ${(props) => (props.isHovered ? '1' : '0')};
  }
  &:hover {
    &:after {
      opacity: 1;
    }
  }
`;

const StyledHover = styled.div`
  font-size: 1em;
  color: ${(props) => colors[props.theme]};
  text-decoration: none;
  outline: none;
  background: none;
  border: none;
  font-family: ${fontFamily.primary}!important;
  font-weight: 600 !important;
  cursor: pointer;
`;

const Hover = ({ children, theme, size, margin, onHover, isHovered }) => (
  <StyledWrapper size={size} margin={margin} onMouseEnter={onHover} theme={theme} isHovered={isHovered}>
    <StyledHover theme={theme}>{children}</StyledHover>
  </StyledWrapper>
);

export default Hover;
