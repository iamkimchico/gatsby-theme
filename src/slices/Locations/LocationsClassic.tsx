import React from 'react';
import styled, { css } from 'styled-components';
import { TDirection } from '../../types';
import { useViewport } from '../../hooks';
import { Image } from '../../media';
import { Body, Heading } from '../../typography';
import { replaceEach } from '../../utils';
import { getColors } from '../../helpers';

const StyledWrapper = styled.div`
  grid-column-start: outer-xx-left;
  grid-column-end: outer-xx-right;
  display: grid;
  grid-template-rows: 1fr 1fr;
  position: relative;

  ${({ theme }) => css`
    margin-bottom: ${theme.base.spacing.MD};
    margin-top: ${theme.base.spacing.MD};

    @media ${theme.base.media.LG} {
      color: black;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-gap: 2em;
      min-height: 24em;
    }
  `}
`;
const StyledColumn = styled.div<{ direction: TDirection }>`
  position: relative;
  min-width: 20em;
  max-width: 25em;
  justify-self: center;

  ${({ theme, direction }) => css`
    @media ${theme.base.media.LG} {
      display: grid;
      grid-area: auto;
      width: 25em;
      min-height: 29em;
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

  ${({ theme }) => css`
    @media ${theme.base.media.LG} {
      padding: 0;
      color: ${theme.design.black_color};
      align-self: center;
    }
  `}
`;

const StyledLocations = styled.div`
  display: grid;
  width: max-content;
  height: max-content;
  grid-gap: 2em;
  align-self: center;
  justify-self: right;
`;
const StyledLocation = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: max-content 1fr;
  grid-column-gap: 1em;
  height: 5em;
`;
const StyledLine = styled.div`
  grid-area: 1/1/4/2;
  width: 0.3em;
  height: 100%;
  background-color: ${({ color }) => color};
`;

const LocationsClassic: React.FC = ({ primary, locations }: any) => {
  const colors = getColors(primary.color_scheme);

  return (
    <StyledWrapper>
      <StyledColumn direction={primary.direction.toLowerCase()}>
        <StyledLocations>
          {locations.map(({ node }: any) => (
            <StyledLocation>
              <StyledLine color={colors.base} />
              <Heading size="h6" color="black">
                {node.data.name}
              </Heading>
              <Body color="black">{node.data.street}</Body>
              <Body color="black">
                {node.data.zip}, {node.data.city}
              </Body>
            </StyledLocation>
          ))}
        </StyledLocations>
      </StyledColumn>

      <StyledColumn direction={primary.direction.toLowerCase()}>
        <StyledTextWrapper>
          <Heading size="h3" color={colors.base}>
            {primary.header}
          </Heading>

          <Body color={colors.black}>{primary.paragraph}</Body>
        </StyledTextWrapper>
      </StyledColumn>
    </StyledWrapper>
  );
};

export default LocationsClassic;
