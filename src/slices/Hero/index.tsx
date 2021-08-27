import React from 'react';
import FullWidthWithBorder from './FullWidthWithBorder';
import HeroClassic from './HeroClassic';

const Hero = (data: any) => {
  const { slice_label } = data;

  return (
    <>
      {slice_label === 'full_width_with_border' && <FullWidthWithBorder {...data} />}
      {slice_label === 'classic' && <HeroClassic {...data} />}
    </>
  );
};

export default Hero;
