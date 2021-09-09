import React from 'react';
import styled, { css } from 'styled-components';
import { getColors } from '../../helpers';
import { Image, Video } from '../../media';
import { Heading } from '../../typography';

const StyledWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    grid-column-start: edge-left;
    grid-column-end: edge-right;
    height: 80em;
    max-height: 80vh;
    display: grid;
    align-items: end;
    padding: 4em;

    > * {
      grid-area: 1/1/2/2;
    }
    @media${theme.base.media.SM} {
      align-items: center;
      padding-left: 8em;
      padding-right: 8em;
      height: 35em;
    }
    @media${theme.base.media.MD} {
      height: 40em;
    }
    @media${theme.base.media.LG} {
      height: 50em;
    }
  `}
`;

const StyledHeading = styled(Heading)`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.base.zLevels[3]};
    font-size: 4em;
    width: 6em;

    @media${theme.base.media.XXS} {
      font-size: 5em;
    }

    @media${theme.base.media.XS} {
      font-size: 6em;
    }
    @media${theme.base.media.SM} {
      font-size: 5em;
    }
    @media${theme.base.media.LG} {
      font-size: 6em;
    }
  `}
`;

const StyledMedia = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100vw;
    border: 1em solid white;
    overflow: hidden;
    height: 80em;
    max-height: 80vh;

    @media${theme.base.media.SM} {
      height: 35em;
    }
    @media${theme.base.media.MD} {
      height: 40em;
    }
    @media${theme.base.media.LG} {
      height: 50em;
    }
  `}
`;

const FullWidthWithBorder: React.FC = ({ primary }: any) => {
  const colors = getColors(primary.color_scheme);

  return (
    <StyledWrapper>
      <StyledMedia>
        <Image src={primary.image} alt={primary.image.alt} />
        {/* {primary.media.url && <Video url={primary.media.url} poster="" hasOverlay />} */}
      </StyledMedia>

      <StyledHeading size="h1" align="left" color={colors.base}>
        {primary.header}
      </StyledHeading>
    </StyledWrapper>
  );
};

export default FullWidthWithBorder;
