import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { TLinkTarget } from '../types';

type TProps = {
  href: string;
  target: TLinkTarget;
};

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  &:visited {
    color: initial;
  }
`;
const StyledGatsbyLink = styled(GatsbyLink)`
  text-decoration: none;
  cursor: pointer;
  &:visited {
    color: initial;
  }
`;

const Link: React.FC<TProps> = ({ children, href, target }) => {
  const isInternal = /^\/(?!\/)/.test(href);

  return (
    <>
      {isInternal ? (
        <StyledGatsbyLink to={href}>{children}</StyledGatsbyLink>
      ) : (
        <StyledLink href={href} target={target}>
          {children}
        </StyledLink>
      )}
    </>
  );
};

export default Link;
