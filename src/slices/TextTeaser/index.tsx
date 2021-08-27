import React from 'react';
import Center from './Center';
import SpecialTitle from './SpecialTitle';

const TextTeaser = (data: any) => {
  const { slice_label } = data;

  return (
    <>
      {slice_label === 'center' && <Center {...data} />}
      {slice_label === 'special_title' && <SpecialTitle {...data} />}
    </>
  );
};

export default TextTeaser;
