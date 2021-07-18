import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { Body } from '.';
import { TAlignNames, TSizeNames, TStyleNames } from '../types';

type TProps = {
  href:string;
  target: "_blank" | "_self" | "_top" | "framename";
  style:TStyleNames;
  size?:TSizeNames;
  align?:TAlignNames;
  margin?:TSizeNames;
  italic?:boolean;
  bold?:boolean;
  variant?:string;
}

const StyledLink = styled(Body)<Partial<TProps>>`
  text-decoration: none;
  cursor: pointer;
  &:visited {
    color: inherit;
  }
`;

const Link:React.FC<TProps> = ({ size, style, children, align, italic, bold, margin, href }) => {
  const isInternal = /^\/(?!\/)/.test(href);

  return (
    <>
      {isInternal ? (
        <GatsbyLink to={href}>
          <StyledLink
            size={size}
            style={style}
            align={align}
            italic={italic}
            bold={bold}
            margin={margin}
          >
            {children}
          </StyledLink>
        </GatsbyLink>
      ) : (
        <StyledLink
          as="a"
          size={size}
          style={style}
          align={align}
          italic={italic}
          bold={bold}
          margin={margin}
          href={href}
        >
          {children}
        </StyledLink>
      )}
    </>
  );
};

export default Link;
