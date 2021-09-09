import React from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../../inputs';
import { Body, Heading, Link } from '../../typography';
import { Image } from '../../media';
import { getColors } from '../../helpers';

type TStyledProps = {
  direction: 'left' | 'right';
};

const StyledWrapper = styled.div<TStyledProps>`
  text-decoration: none;
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  overflow: hidden;
  ${({ theme, direction }) => css`
    margin-top: ${theme.base.spacing.LG};
    margin-bottom: ${theme.base.spacing.LG};
    @media ${theme.base.media.SM} {
      grid-column-start: ${direction === 'right' ? 'outer-xxx-left' : 'edge-left'};
      grid-column-end: ${direction === 'right' ? 'edge-right' : 'outer-xxx-right'};
    }
  `}
`;

const StyledContent = styled.div<TStyledProps>`
  display: grid;
  min-height: 35em;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  grid-gap: 2em;

  ${({ theme, direction }) => css`
    @media ${theme.base.media.SM} {
      grid-gap: 3em;
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
    @media ${theme.base.media.SM} {
      grid-area: ${direction === 'right' ? '1/1/2/2' : '1/2/2/3'};
    }
  `}
`;

const EdgeImage: React.FC = ({ primary }: any) => {
  const colors = getColors(primary.color_scheme);

  return (
    <StyledWrapper direction={primary.direction.toLowerCase()}>
      <StyledContent direction={primary.direction.toLowerCase()}>
        <Image src={primary.image} alt={primary.image.alt} />
        <StyledTextWrapper direction={primary.direction.toLowerCase()}>
          <Heading size="h3" color={colors.base}>
            {primary.header}
          </Heading>

          <Body size="MD" color={colors.black}>
            {primary.paragraph}
          </Body>

          <Link href="/test" target="_blank">
            <Button shape="rounded" color={colors.major}>
              {primary.button_text}
            </Button>
          </Link>
        </StyledTextWrapper>
      </StyledContent>
    </StyledWrapper>
  );
};

export default EdgeImage;
