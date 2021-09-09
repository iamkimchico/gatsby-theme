import React from 'react';
import styled, { css } from 'styled-components';
import { TDirection } from '../../types';
import { useViewport } from '../../hooks';
import { Image } from '../../media';
import { Body, Heading } from '../../typography';
import { replaceEach } from '../../utils';
import { getColors } from '../../helpers';

const StyledWrapper = styled.div`
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  display: grid;
  grid-template-rows: 20em 1fr;
  position: relative;

  ${({ theme }) => css`
    margin-bottom: ${theme.base.spacing.XL};
    margin-top: ${theme.base.spacing.MD};

    @media ${theme.base.media.SM} {
      grid-column-start: outer-xx-left;
      grid-column-end: outer-xx-right;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-gap: 2em;
      height: 35em;
    }
    @media ${theme.base.media.MD} {
      grid-gap: 4em;
    }
  `}
`;
const StyledColumn = styled.div<{ direction: TDirection }>`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 25em;
  justify-self: center;
  display: grid;

  ${({ theme, direction }) => css`
    @media ${theme.base.media.SM} {
      max-width: 25em;
      display: grid;
      grid-area: auto;
      width: 25em;
      min-height: 29em;
      justify-self: center;

      &:last-of-type {
        grid-area: ${direction === 'left' ? '1/2/2/3' : '1/1/2/2'};
      }
    }
  `}
`;
const StyledTextWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: auto;
  padding-top: 2em;
  align-self: center;

  ${({ theme }) => css`
    @media ${theme.base.media.LG} {
      padding: 0;
      color: ${theme.design.black_color};
      align-self: center;
    }
  `}
`;

const InfoBoxClassic: React.FC = ({ primary }: any) => {
  const breakpoint = useViewport().index;
  const colors = getColors(primary.color_scheme);

  return (
    <StyledWrapper>
      <StyledColumn direction={primary.direction.toLowerCase()}>
        <Image src={primary.image} alt={primary.image.alt} />
      </StyledColumn>

      <StyledColumn direction={primary.direction.toLowerCase()}>
        <StyledTextWrapper>
          <Heading size="h3" color={colors.base}>
            {primary.header}
          </Heading>

          <Body color={colors.black}>
            <p
              dangerouslySetInnerHTML={{
                __html: replaceEach(primary.paragraph, '\n', '<br>'),
              }}
            />
          </Body>
        </StyledTextWrapper>
      </StyledColumn>
    </StyledWrapper>
  );
};

export default InfoBoxClassic;
