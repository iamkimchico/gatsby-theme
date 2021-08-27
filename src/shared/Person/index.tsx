import React from 'react';
import PersonLowerThird from './PersonLowerThird';

type TProps = {
  type: 'lowerThird';
  content: any;
  color: string;
};

const Person: React.FC<TProps> = ({ type, content, color }) => (
  <>{type === 'lowerThird' && <PersonLowerThird {...content} showMail={false} color={color} />}</>
);

export default Person;
