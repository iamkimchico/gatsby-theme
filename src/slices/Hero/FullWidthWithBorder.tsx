import React from 'react';
import styled, { css } from 'styled-components';
import { getColors } from '../../helpers';
import { Image, Video } from '../../media';
import { Heading } from '../../typography';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: edge-left;
  grid-column-end: edge-right;
  min-height: 50em;
  height: 80vh;
  max-height: 80em;
  display: grid;
  align-items: end;
  padding: 4em;

  > * {
    grid-area: 1/1/2/2;
  }
`;

const StyledHeading = styled(Heading)`
  ${({ theme }) => css`
    z-index: ${theme.base.zLevels[3]};
    font-size: 4em;
    width: 6em;

    @media${theme.base.media.XXS} {
      font-size: 5em;
    }

    @media${theme.base.media.XS} {
      font-size: 6em;
    }
  `}
`;

const StyledMedia = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100%;
  border: 1em solid white;
  overflow: hidden;
  min-height: 50em;
  height: 80vh;
  max-height: 80em;
`;

const FullWidthWithBorder: React.FC = ({ primary }: any) => {
  const colors = getColors(primary.color_scheme);
  return (
    <StyledWrapper>
      <StyledHeading size="h1" align="left" color={colors.base}>
        {primary.header}
      </StyledHeading>

      <StyledMedia>
        {primary.image.url && <Image url={primary.image.url} position="center center" size="cover" alt="" />}
        {primary.media.url && <Video url={primary.media.url} poster="" hasOverlay />}
      </StyledMedia>
    </StyledWrapper>
  );
};

export default FullWidthWithBorder;
