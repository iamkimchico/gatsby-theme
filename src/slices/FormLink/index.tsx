import React from 'react';
import FormLinkClassic from './FormLinkClassic';

const FormLink: React.FC = (data: any) => {
  const { slice_label } = data;

  return <>{slice_label === 'classic' && <FormLinkClassic {...data} />}</>;
};

export default FormLink;
