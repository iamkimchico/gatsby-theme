import React from 'react';
import styled, { css } from 'styled-components';
import { getColors, resolveLink } from '../../helpers';
import { useViewport } from '../../hooks';
import { Button } from '../../inputs';
import { TSizeNames } from '../../types';
import { Heading, Link } from '../../typography';

const StyledWrapper = styled.div<{ viewport: TSizeNames }>`
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  display: grid;
  position: relative;
  justify-self: center;
  width: min-content;

  ${({ theme }) => css`
    margin-top: ${theme.base.spacing.MX};
    margin-bottom: ${theme.base.spacing.MX};

    @media ${theme.base.media.SM} {
      width: 43em;
    }

    > span {
      right: 0;
      bottom: 0;
      position: absolute;
      margin-bottom: 7em;
      margin-right: 3em;
      @media ${theme.base.media.MD} {
        margin-bottom: 2em;
        margin-right: 9em;
      }
      @media ${theme.base.media.LG} {
        margin-right: 16em;
      }
    }
  `}
`;

const StyledBottomWrapper = styled.div`
  display: flex;
  gap: 1em;
  flex-flow: column;
`;

const TextTeaserSpecialTitle: React.FC = ({ primary }: any) => {
  const viewport = useViewport().size;

  const colors = getColors(primary.color_scheme);

  return (
    <StyledWrapper viewport={viewport}>
      <StyledBottomWrapper>
        <Heading size="h1" variation="special" color={colors.base}>
          {primary.header}
        </Heading>
        <Link href={resolveLink(primary.button_url)} target={primary.button_url.target}>
          <Button shape="arrow" color={colors.major}>
            {primary.button_text}
          </Button>
        </Link>
      </StyledBottomWrapper>
    </StyledWrapper>
  );
};

export default TextTeaserSpecialTitle;
