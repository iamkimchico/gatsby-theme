import React from 'react';
import NewsletterClassic from './NewsletterClassic';

const Newsletter = (data: any) => {
  const { slice_label } = data;

  return <>{slice_label === 'classic' && <NewsletterClassic {...data} />}</>;
};

export default Newsletter;
