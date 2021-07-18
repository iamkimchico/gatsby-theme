import React from 'react';
import styled from 'styled-components';
import { Body } from '../typography';
import { media } from '../../constants/breakpoints';

const StyledWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  width: max-content;
`;
const StyledOptions = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1em;
  padding: 0.5em;
  &[data-valid='false'] {
    border: 1px solid red;
    border-radius: 0.5em;
  }
`;
const StyledOption = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  grid-gap: 0.5em;
  input {
    cursor: pointer;
  }
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5em;
  position: relative;
  display: block;
  font-size: 1em;
  @media ${media.large} {
    font-size: 0.8em;
  }
`;

const Radio = ({ name, options, label }) => {
  return (
    <StyledWrapper>
      <StyledLabel for={name}>{label}</StyledLabel>
      <StyledOptions>
        {options.map((option) => (
          <StyledOption>
            <input type="radio" value={option} name={name} />
            <Body>{option}</Body>
          </StyledOption>
        ))}
      </StyledOptions>
    </StyledWrapper>
  );
};

export default Radio;
