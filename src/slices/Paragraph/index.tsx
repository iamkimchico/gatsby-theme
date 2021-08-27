import React from 'react';
import ParagraphIntro from './ParagraphIntro';

const Paragraph = (data: any) => {
  const { slice_label } = data;

  return <>{slice_label === 'intro' && <ParagraphIntro {...data} />}</>;
};

export default Paragraph;
