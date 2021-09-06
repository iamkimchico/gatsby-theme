import React from 'react';
import LinkListClassic from './LinkListClassic';

const LinkList = (data: any) => {
  const { slice_label } = data;

  return <>{slice_label === 'classic' && <LinkListClassic {...data} />}</>;
};

export default LinkList;
