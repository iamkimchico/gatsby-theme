import React, { useState } from 'react';
import styled from 'styled-components';
import { Body } from '../typography';

type TProps = {
  id: string;
  submitMessage: string;
};

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  gap: 1em;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.base.spacing.SM};
  p {
    margin-top: 1em;
  }
  button {
    cursor: pointer;
  }
`;

const Form: React.FC<TProps> = ({ children, id, submitMessage }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInvalid = () => {
    //
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <StyledForm
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name={id}
      onSubmit={handleSubmit}
      onInvalid={handleInvalid}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name={id} value={id} />
      {!isSubmitted ? (
        <>{children}</>
      ) : (
        <>
          <Body color="black">{submitMessage}</Body>
        </>
      )}
    </StyledForm>
  );
};

export default Form;
