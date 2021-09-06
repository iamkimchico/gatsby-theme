import React from 'react';
import CardsTeaserCarousel from './CardsTeaserCarousel';

const CardsTeaser = (data: any) => {
  const { slice_label } = data;

  return <>{slice_label === 'carousel' && <CardsTeaserCarousel {...data} />}</>;
};

export default CardsTeaser;
