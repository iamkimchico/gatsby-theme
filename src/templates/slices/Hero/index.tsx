import React from 'react';
import FullWidthWithBorder from './FullWidthWithBorder';

const Hero = (data: any) => {
  const { slice_label } = data;

  return <>{slice_label === 'full_width_with_border' && <FullWidthWithBorder {...data} />}</>;
};

export default Hero;
