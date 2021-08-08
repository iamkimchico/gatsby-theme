import React from 'react';
import styled, { css } from 'styled-components';
import { useViewport } from '../../../hooks';
import { Button } from '../../../inputs';
import { TSizeNames } from '../../../types';
import { Heading, Link } from '../../../typography';

const StyledWrapper = styled.div<{ viewport: TSizeNames }>`
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  display: grid;
  position: relative;
  margin-top: 5em;
  margin-bottom: 5em;
  justify-self: center;
  width: min-content;

  ${({ theme }) => css`
    @media ${theme.base.media.MD} {
      width: max-content;
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
  ${({ theme }) => css`
    @media ${theme.base.media.MD} {
      flex-flow: row;
      align-items: center;
    }
  `}
`;

const TitleSpecial: React.FC = ({ primary }: any) => {
  const viewport = useViewport().size;

  return (
    <StyledWrapper viewport={viewport}>
      <StyledBottomWrapper>
        <Heading size="h1" colorScheme={primary.color_scheme.toLowerCase()}>
          {primary.header}
        </Heading>
        <Link href={primary.button_url.url} target={primary.button_url.target}>
          <Button colorScheme={primary.color_scheme.toLowerCase()}>{primary.button_label}</Button>
        </Link>
      </StyledBottomWrapper>
    </StyledWrapper>
  );
};

export default TitleSpecial;
