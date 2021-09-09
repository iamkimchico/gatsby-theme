import React from 'react';
import RichTextEditorClassic from './RichTextEditorClassic';

const RichTextEditor: React.FC = (data: any) => {
  const { slice_label } = data;

  return <>{slice_label === 'classic' && <RichTextEditorClassic {...data} />}</>;
};

export default RichTextEditor;
