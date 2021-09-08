import React from 'react';
import styled, { css } from 'styled-components';
import { TDirection } from '../../types';
import { Body, Heading } from '../../typography';
import { getColors } from '../../helpers';
import { Image } from '../../media';
import { useViewport } from '../../hooks';

const StyledWrapper = styled.div`
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  display: grid;
  grid-template-rows: 1fr max-content;
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
      min-height: 24em;
    }
  `}
`;
const StyledColumn = styled.div<{ direction: TDirection }>`
  position: relative;
  min-width: 20em;
  display: grid;
  align-self: center;

  ${({ theme, direction }) => css`
    &:first-of-type {
      grid-area: 2/1/3/2;
    }
    @media ${theme.base.media.SM} {
      justify-self: center;
      &:first-of-type {
        grid-area: 1/1/2/2;
      }
    }
    @media ${theme.base.media.LG} {
      display: grid;
      grid-area: auto;
      width: 25em;
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
  grid-auto-flow: column;
  width: max-content;
  height: max-content;
  grid-gap: 3em;
  align-self: center;
  margin-top: 3em;
  ${({ theme }) => css`
    @media ${theme.base.media.SM} {
      justify-self: right;
      grid-gap: 2em;
      grid-auto-flow: row;
    }
  `}
`;
const StyledLocation = styled.div`
  display: grid;
  grid-column-gap: 1em;
  grid-template-columns: 0.5em 1fr;
  height: 6em;

  ${({ theme }) => css`
    @media ${theme.base.media.SM} {
      grid-column-gap: 2em;
      grid-template-columns: 8em 1fr;
      height: 8em;
    }
  `}
`;

const StyledLine = styled.div`
  width: 0.5em;
  height: 100%;
  background-color: ${({ theme }) => theme.base.shades[5]};
`;

const StyledLocationText = styled.div`
  align-self: center;
  height: max-content;
  > * {
    margin: 0.3em;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 1.5em;
`;

const LocationsClassic: React.FC = ({ primary, locations }: any) => {
  const colors = getColors(primary.color_scheme);
  const viewport = useViewport().index;

  return (
    <StyledWrapper>
      <StyledColumn direction={primary.direction.toLowerCase()}>
        <StyledLocations>
          {locations.map(({ node }: any) => (
            <StyledLocation>
              {viewport >= 1 ? <Image url={node.data.image.url} alt={node.data.image.alt} /> : <StyledLine />}

              <StyledLocationText>
                <StyledHeading size="h6" color="black">
                  {node.data.name}
                </StyledHeading>
                <Body bold color="black">
                  {node.data.street}
                </Body>
                <Body bold color="black">
                  {node.data.zip}, {node.data.city}
                </Body>
              </StyledLocationText>
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
