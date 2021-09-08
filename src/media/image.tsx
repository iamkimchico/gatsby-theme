import { GatsbyImage, getImage, IGatsbyImageData, ImageDataLike, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled, { useTheme } from 'styled-components';

type TProps = {
  url: ImageDataLike;
  description?: string;
  alt: string;
};

const StyledImage = styled.img`
  /* width: 100%;
  height: 100%; */
`;

const Image: React.FC<TProps> = ({ url, alt, description }) => (
  <>
    {console.log('here', getImage(url))}
    <GatsbyImage
      image={getImage(url) as IGatsbyImageData}
      alt={alt}
      objectFit="cover"
      objectPosition="center center"
      loading="lazy"
    />
  </>
);

export default Image;
