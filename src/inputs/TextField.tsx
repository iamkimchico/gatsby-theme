import React from 'react';
import styled from 'styled-components';
import Button from './Button';

type TProps = {
  placeholder: string;
  buttonLabel: string;
  name: string;
  type: string;
  required?: boolean;
  color: string;
};

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 25em;
  > span {
    position: absolute;
    right: 1em;
    top: 0.8em;
  }
  margin-top: ${({ theme }) => theme.base.spacing.SM};
  margin-bottom: ${({ theme }) => theme.base.spacing.SM};
`;
const StyledInput = styled.input`
  width: 100%;
  height: 4em;
  border: none;
  border-radius: 0.5em;
  padding-left: 2em;
  font-family: ${({ theme }) => theme.design.primary_font};
  box-shadow: 0px 2px 30px ${({ theme }) => theme.base.shades[5]};
  font-size: 1em;
`;

const Textfield: React.FC<TProps> = ({ placeholder, buttonLabel, name, type, required, color }) => (
  <>
    <StyledWrapper>
      <StyledInput name={name} placeholder={placeholder} type={type} required={required} />
      {buttonLabel && (
        <Button color={color} shape="pill">
          {buttonLabel}
        </Button>
      )}
    </StyledWrapper>
  </>
);

export default Textfield;
