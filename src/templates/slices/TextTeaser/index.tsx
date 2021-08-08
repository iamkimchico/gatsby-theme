import React from 'react';
import Center from './Center';

const TextTeaser = (data: any) => {
  const { slice_label } = data;

  console.log('here', slice_label);

  return <>{slice_label === 'center' && <Center {...data} />}</>;
};

export default TextTeaser;
