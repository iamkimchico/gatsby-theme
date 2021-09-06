import React from 'react';
import ImageInfoListHorizontal from './ImageInfoListHorizontal';

const ImageInfoList = (data: any) => {
  const { slice_label } = data;

  return <>{slice_label === 'horizontal' && <ImageInfoListHorizontal {...data} />}</>;
};

export default ImageInfoList;
