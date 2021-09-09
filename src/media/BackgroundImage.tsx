import { getImage, IGatsbyImageData, ImageDataLike } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { Image } from '.';

type TProps = {
  url: ImageDataLike;
  alt: string;
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  > * {
    grid-area: 1/1/2/2;
  }
`;

const StyledContent = styled.div``;

const BackgroundImage: React.FC<TProps> = ({ children, url, alt }) => (
  <StyledWrapper>
    <Image src={getImage(url) as IGatsbyImageData} alt={alt} />
    <StyledContent>{children}</StyledContent>
  </StyledWrapper>
);

export default BackgroundImage;
