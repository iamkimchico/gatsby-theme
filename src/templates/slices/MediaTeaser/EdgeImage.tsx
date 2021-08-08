import React, { RefObject, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../../../inputs';
import { Body, Heading, Link } from '../../../typography';
import { Image } from '../../../media';

type TStyledProps = {
  ref?: RefObject<HTMLAnchorElement>;
  direction: 'left' | 'right';
};

const StyledLink = styled.a<TStyledProps>`
  text-decoration: none;
  grid-column-start: edge-left;
  grid-column-end: edge-right;
  ${({ theme, direction }) => css`
    margin-top: ${theme.base.spacing.SM};
    margin-bottom: ${theme.base.spacing.SM};
    @media ${theme.base.media.MD} {
      grid-column-start: ${direction === 'right' ? 'outer-xxx-left' : 'edge-left'};
      grid-column-end: ${direction === 'right' ? 'edge-right' : 'outer-xxx-right'};
    }
  `}
`;

const StyledWrapper = styled.div<TStyledProps>`
  display: grid;
  min-height: 28.8em;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  grid-gap: 3em;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;

  ${({ theme, direction }) => css`
    @media ${theme.base.media.MD} {
      grid-template-columns: ${direction === 'right' ? 'max-content 1fr' : '1fr max-content'};
      grid-template-rows: 1fr;
      grid-gap: 3em;
    }

    @media ${theme.base.media.MX} {
      figure {
        margin-left: ${direction === 'right' ? '0em' : '-10em'};
        margin-right: ${direction === 'right' ? '-10em' : '0em'};
        width: calc(100% + 10em);
      }
    }
  `}
`;

const StyledTextWrapper = styled.div<TStyledProps>`
  position: relative;
  max-width: 25em;
  height: max-content;
  > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 5em;
  }

  ${({ theme, direction }) => css`
    @media ${theme.base.media.MD} {
      grid-area: ${direction === 'right' ? '1/1/2/2' : '1/2/2/3'};
    }
  `}
`;

const EdgeImage: React.FC = ({ primary }: any) => {
  const component = useRef<HTMLAnchorElement>(null);

  return (
    <StyledLink href={primary.button_link?.path} direction={primary.direction.toLowerCase()} ref={component}>
      <StyledWrapper direction={primary.direction.toLowerCase()}>
        <Image url={primary.image?.url} size="cover" alt="" position="center center" />
        <StyledTextWrapper direction={primary.direction.toLowerCase()}>
          <Heading size="h3" colorScheme={primary.color_scheme}>
            {primary.header}
          </Heading>

          <Body size="MD" colorScheme="black">
            {primary.paragraph}
          </Body>

          <Link href="" target="_blank">
            <Button colorScheme="primary">{primary.button_label}</Button>
          </Link>
        </StyledTextWrapper>
      </StyledWrapper>
    </StyledLink>
  );
};

export default EdgeImage;
