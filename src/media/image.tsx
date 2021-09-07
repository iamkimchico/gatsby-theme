import React, { useState } from 'react';
import styled, { css, useTheme } from 'styled-components';
import { TBgPositions, TBgSizes } from '../types';
import { Body } from '../typography';

type TProps = {
  url: string;
  size: TBgSizes;
  position: TBgPositions;
  description?: string;
  alt: string;
  className?: any;
};

const StyledImage = styled.figure<Partial<TProps>>`
  width: 100%;
  height: 100%;
  position: relative;
  background-repeat: no-repeat;
  ${({ size, position, url }) =>
    css`
      background-size: ${size};
      background-position: ${position};
      background-image: url(${url});
    `}
`;

const StyledDescription = styled.div<{ show: boolean }>`
  position: absolute;
  bottom: 1em;
  width: 100%;
  display: grid;
  justify-items: center;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  ${({ show }) =>
    show &&
    css`
      opacity: 1;
      transform: translateY(-0.5em);
    `}

  p {
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
    width: max-content;
    padding: 1em 2.5em 1em 2.5em;
    background-color: white;
    border-radius: 2em;
  }
`;

const Image: React.FC<TProps> = ({ url, size, children, position, description, alt, className }) => {
  const theme = useTheme();
  const [showDescription, setShowDescription] = useState(false);
  return (
    <>
      <StyledImage
        url={url}
        size={size}
        position={position}
        alt={alt}
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
        className={className}
      >
        {children}
        {description && (
          <StyledDescription show={showDescription}>
            <Body size="SM" color={theme.base.shades[3]} align="center">
              {description}
            </Body>
          </StyledDescription>
        )}
      </StyledImage>
    </>
  );
};

export default Image;
