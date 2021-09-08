import { GatsbyImage, getImage, IGatsbyImageData, ImageDataLike } from 'gatsby-plugin-image';
import React from 'react';
import styled, { useTheme } from 'styled-components';

type TProps = {
  image: ImageDataLike;
  description?: string;
  alt: string;
  className?: any;
};

const StyledImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
`;

const Image: React.FC<TProps> = ({ image, children, alt, description }) => {
  const theme = useTheme();
  return (
    <>
      <StyledImage
        image={getImage(image) as IGatsbyImageData}
        alt={alt}
        // size={size}
        // position={position}
        // alt={alt}
        // className={className}
      >
        {children}
      </StyledImage>
    </>
  );
};

export default Image;
