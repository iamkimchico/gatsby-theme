import React from 'react';
import TextTeaserClassic from './TextTeaserClassic';
import TextTeaserSpecialTitle from './TextTeaserSpecialTitle';
import TextTeaserTwoColumnColored from './TextTeaserTwoColumnColored';

const TextTeaser = (data: any) => {
  const { slice_label } = data;

  return (
    <>
      {slice_label === 'classic' && <TextTeaserClassic {...data} />}
      {slice_label === 'special_title' && <TextTeaserSpecialTitle {...data} />}
      {slice_label === 'two_column_colored' && <TextTeaserTwoColumnColored {...data} />}
    </>
  );
};

export default TextTeaser;
