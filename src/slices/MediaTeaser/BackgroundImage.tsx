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
  viewport: TSizeNames;
};

const StyledWrapper = styled.div`
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  height: 35em;
  ${({ theme }) => css`
    margin-top: ${theme.base.spacing.LG};
    margin-bottom: ${theme.base.spacing.LG};
    @media${theme.base.media.SM} {
      height: 35em;
    }
  `}
`;

const StyledContent = styled.div<TStyledProps>`
  display: grid;
  align-items: center;
  width: 100%;
  height: 100%;

  ${({ direction, viewport }) => css`
    justify-items: ${direction};
    padding-left: ${getColPadding('outer-xx', viewport)};
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
  const colors = getColors(primary.color_scheme);
  const viewport = useViewport().size;

  return (
    <StyledWrapper>
      <BgImage src={primary.image} alt={primary.image.alt}>
        <StyledContent direction={primary.direction.toLowerCase()} viewport={viewport}>
          <StyledTextWrapper>
            <Heading size="h3" color={colors.base}>
              {primary.header}
            </Heading>

            <Body size="MD" color={colors.white}>
              {primary.paragraph}
            </Body>

            <Link href="" target="_blank">
              <Button shape="rounded" color={colors.major}>
                {primary.button_text}
              </Button>
            </Link>
          </StyledTextWrapper>
        </StyledContent>
      </BgImage>
    </StyledWrapper>
  );
};

export default BackgroundImage;
