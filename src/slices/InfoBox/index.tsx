import React from 'react';
import InfoBoxClassic from './InfoBoxClassic';

const InfoBox = (data: any) => {
  const { slice_label } = data;

  return <>{slice_label === 'classic' && <InfoBoxClassic {...data} />}</>;
};

export default InfoBox;
