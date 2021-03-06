import React from 'react';
import styled from 'styled-components';

type TProps = {
  url: string;
  hasOverlay?: boolean;
  poster: string;
};

const StyledWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;

  > * {
    grid-area: 1/1/2/2;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: ${({ theme }) => theme.base.zLevels[1]};
`;

const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('../../videoOverlay.png');
  background-repeat: repeat;
  background-size: 30px 30px;
  position: relative;
  z-index: ${({ theme }) => theme.base.zLevels[2]};
`;

const Video: React.FC<TProps> = ({ hasOverlay, poster, url }) => (
  <StyledWrapper>
    {hasOverlay && <StyledOverlay />}
    <StyledVideo autoPlay muted loop poster={poster}>
      <source src={url} type="video/mp4" />
    </StyledVideo>
  </StyledWrapper>
);

export default Video;
