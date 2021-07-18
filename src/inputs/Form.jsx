import React, { useState } from 'react';
import styled from 'styled-components';
import { Body, Heading } from '../typography';
import { spacing } from '../../constants';

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  gap: 1em;
  flex-direction: column;
  align-items: center;
  margin-top: ${spacing.small};
  p {
    margin-top: 1em;
  }
  button {
    cursor: pointer;
  }
`;

const Form = ({ children, name, submitMessage }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInvalid = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <StyledForm
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name={name}
      onSubmit={handleSubmit}
      onInvalid={handleInvalid}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name={name} value={name} />
      {!isSubmitted ? (
        <>{children}</>
      ) : (
        <>
          <Body>{submitMessage}</Body>
        </>
      )}
    </StyledForm>
  );
};

export default Form;
