import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

type TProps = {
  src: IGatsbyImageData;
  description?: string;
  alt: string;
};

const StyledImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
`;

const Image: React.FC<TProps> = ({ src, alt, description }) => (
  <>
    <StyledImage
      image={getImage(src) as IGatsbyImageData}
      alt={alt}
      objectFit="cover"
      objectPosition="center center"
      loading="lazy"
    />
  </>
);

export default Image;
