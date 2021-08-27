import React from 'react';
import UspClassic from './UspClassic';

const Usp = (data: any) => {
  const { slice_label } = data;

  return <>{slice_label === 'classic' && <UspClassic {...data} />}</>;
};

export default Usp;
