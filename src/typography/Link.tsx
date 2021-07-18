import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import Body from './Body';
import { TAlignNames, TSizeNames, TColorScheme } from '../types';

type TProps = {
  href: string;
  target: '_blank' | '_self' | '_top' | 'framename';
  colorScheme: TColorScheme;
  size?: TSizeNames;
  align?: TAlignNames;
  margin?: TSizeNames;
  italic?: boolean;
  bold?: boolean;
  variant?: string;
};

const StyledLink = styled(Body)<Partial<TProps>>`
  text-decoration: none;
  cursor: pointer;

  &:visited {
    color: inherit;
  }
`;

const Link: React.FC<TProps> = ({ size, colorScheme, children, align, italic, bold, margin, href }) => {
  const isInternal = /^\/(?!\/)/.test(href);

  return (
    <>
      {isInternal
        ? (
          <GatsbyLink to={href}>
            <StyledLink size={size} colorScheme={colorScheme} align={align} italic={italic} bold={bold} margin={margin}>
              {children}
            </StyledLink>
          </GatsbyLink>
        )
        : (
          <StyledLink
            as="a"
            size={size}
            colorScheme={colorScheme}
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
