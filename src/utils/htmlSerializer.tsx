import React from 'react';
import { Body, Heading } from '../typography';

const htmlSerializer = (type, element, content, children, key) => {
  switch (type) {
    case 'paragraph':
      return <Body color="black">{children}</Body>;
    case 'heading4':
      return (
        <Heading color="black" size="h4" marginBottom="SM" marginTop="LG">
          {children}
        </Heading>
      );
    case 'heading6':
      return (
        <Heading color="black" size="h6" marginTop="SM">
          {children}
        </Heading>
      );

    default:
      return null;
  }
};

export default htmlSerializer;
