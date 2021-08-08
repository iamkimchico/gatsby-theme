import React from 'react';
import styled, { css } from 'styled-components';
import { getColPadding } from '../../../helpers';
import { useViewport } from '../../../hooks';
import { TColNames, TSizeNames } from '../../../types';
import { Body, Heading, Link } from '../../../typography';
import { Image } from '../../../media';
import { Button } from '../../../inputs';

type TStyledProps = {
  direction: string;
  image: string;
  padding: TColNames;
  viewport: TSizeNames;
};

const StyledLink = styled.a`
  text-decoration: none;
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  ${({ theme }) => css`
    margin-top: ${theme.base.spacing.SM};
    margin-bottom: ${theme.base.spacing.SM};
  `}
`;

const StyledWrapper = styled.div<TStyledProps>`
  display: grid;
  min-height: 28.8em;
  align-items: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  ${({ direction, image, padding, viewport }) => css`
    justify-items: ${direction};
    background-image: url(${image});
    padding-left: ${getColPadding(padding, viewport)};
    padding-right: ${getColPadding(padding, viewport)};
  `}
`;

const StyledTextWrapper = styled.div`
  position: relative;
  max-width: 25em;
  height: max-content;
  > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 5em;
  }
`;

const BackgroundImage = ({ primary }: any) => {
  const viewport = useViewport().size;

  return (
    <StyledLink href={primary.button_link?.path}>
      <Image url={primary.image.url} alt={primary.image.alt} size="cover" position="center center">
        <StyledWrapper
          direction={primary.direction.toLowerCase()}
          image={primary.background_image?.url}
          padding="outer-xx"
          viewport={viewport}
        >
          <StyledTextWrapper>
            <Heading size="h3" colorScheme={primary.colorScheme}>
              {primary.header}
            </Heading>

            <Body size="MD" colorScheme="white">
              {primary.paragraph}
            </Body>

            <Link href="" target="_blank">
              <Button colorScheme="primary">{primary.button_label}</Button>
            </Link>
          </StyledTextWrapper>
        </StyledWrapper>
      </Image>
    </StyledLink>
  );
};

export default BackgroundImage;
