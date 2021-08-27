import React from 'react';
import EdgeImage from './EdgeImage';
import BackgroundImage from './BackgroundImage';

const MediaTeaser = (data: any) => {
  const { slice_label } = data;

  return (
    <>
      {slice_label === 'edge_image' && <EdgeImage {...data} />}
      {slice_label === 'background_image' && <BackgroundImage {...data} />}
    </>
  );
};

export default MediaTeaser;
