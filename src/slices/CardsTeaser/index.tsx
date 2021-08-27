import React from 'react';
import Carousel from './Carousel';

const CardsTeaser = (data: any) => {
  const { slice_label } = data;

  return <>{slice_label === 'carousel' && <Carousel {...data} />}</>;
};

export default CardsTeaser;
