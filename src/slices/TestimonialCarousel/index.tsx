import React from 'react';
import TestimonialCarouselClassic from './TestimonialCarouselClassic';

const TestimonialCarousel = (data: any) => {
  const { slice_label } = data;

  return <>{slice_label === 'classic' && <TestimonialCarouselClassic {...data} />}</>;
};

export default TestimonialCarousel;
