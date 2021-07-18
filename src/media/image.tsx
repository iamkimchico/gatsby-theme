import React from 'react';
import styled, { css } from 'styled-components';
// import { HelpText } from '../typography';

type TProps = {
  url:string;
  darken?:string;
  size:string;
  position:string;
  helpText?:string;
}

const StyledImage = styled.figure<Partial<TProps>>`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  position: relative;
  ${({size, position, url}) =>
    css`
      background-size: ${size};
      background-position: ${position};
      background-image: url(${url});
    `}

  ${({ darken }) =>
    darken &&
    css`
      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.5;
      }
    `}
`;

const Image:React.FC<TProps> = ({ url, darken, size, children, position, helpText }) => {
  const pos = position === 'right' ? 'right center' : position === 'left' ? 'left center' : 'center center';
  return (
    <>
      <StyledImage url={url} darken={darken} size={size} position={pos}>
        {children}
      </StyledImage>
      {helpText && (
        <div>{helpText}</div>
        // <HelpText floating align="center" margin="small">
        //   {helpText}
        // </HelpText>
      )}
    </>
  );
};

export default Image;
