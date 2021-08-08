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
`;

const Link: React.FC<TProps> = ({ children, href, target }) => {
  const isInternal = /^\/(?!\/)/.test(href);

  return (
    <>
      {isInternal ? (
        <StyledLink as={GatsbyLink} to={href}>
          {children}
        </StyledLink>
      ) : (
        <StyledLink href={href} target={target}>
          {children}
        </StyledLink>
      )}
    </>
  );
};

export default Link;
