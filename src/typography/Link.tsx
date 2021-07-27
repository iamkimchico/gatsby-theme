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

const StyledLink = styled.span<Partial<TProps>>`
  text-decoration: none;
  cursor: pointer;

  &:visited {
    color: inherit;
  }
`;

const Link: React.FC<TProps> = ({ size, colorScheme, children, align, italic, bold, margin, href }) => {
  const isInternal = /^\/(?!\/)/.test(href);

  const Content =
    typeof children === 'string' ? (
      <Body size={size} colorScheme={colorScheme} align={align} italic={italic} bold={bold} margin={margin}>
        {children}
      </Body>
    ) : (
      children
    );
  return (
    <>
      {isInternal ? (
        <StyledLink as={GatsbyLink} to={href}>
          {Content}
        </StyledLink>
      ) : (
        <StyledLink as="a" href={href}>
          {Content}
        </StyledLink>
      )}
    </>
  );
};

export default Link;
