import React from 'react';
import styled, { css } from 'styled-components';
import { getColors, getColPadding } from '../../helpers';
import { useViewport } from '../../hooks';
import { TColNames, TSizeNames } from '../../types';
import { Body, Heading, Link } from '../../typography';
import { BackgroundImage as BgImage } from '../../media';
import { Button } from '../../inputs';

type TStyledProps = {
  direction: string;
  image: string;
  padding: TColNames;
  viewport: TSizeNames;
};

const StyledWrapper = styled.div`
  text-decoration: none;
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  ${({ theme }) => css`
    margin-top: ${theme.base.spacing.LG};
    margin-bottom: ${theme.base.spacing.LG};
  `}
`;

const StyledContent = styled.div<TStyledProps>`
  display: grid;
  min-height: 35em;
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

const BackgroundImage: React.FC = ({ primary }: any) => {
  const viewport = useViewport().size;
  const colors = getColors(primary.color_scheme);

  return (
    <StyledWrapper>
      <BgImage url={primary.image.url} position="center center">
        <StyledContent
          direction={primary.direction.toLowerCase()}
          image={primary.background_image?.url}
          padding="outer-xx"
          viewport={viewport}
        >
          <StyledTextWrapper>
            <Heading size="h3" color={colors.base}>
              {primary.header}
            </Heading>

            <Body size="MD" color={colors.white}>
              {primary.paragraph}
            </Body>

            <Link href="" target="_blank">
              <Button shape="rounded" color={colors.major}>
                {primary.button_label}
              </Button>
            </Link>
          </StyledTextWrapper>
        </StyledContent>
      </BgImage>
    </StyledWrapper>
  );
};

export default BackgroundImage;
