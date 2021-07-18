import React from 'react';
import styled from 'styled-components';
import { spacing, fontFamily, shades, getSecondaryColor } from '../../constants';
import Button from './Button';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 25em;
  > span {
    position: absolute;
    right: 3em;
    top: 1.3em;
  }
  margin-top: ${(props) => spacing[props.margin]};
  margin-bottom: ${(props) => spacing[props.margin]};
`;
const StyledInput = styled.input`
  width: 100%;
  height: 4em;
  border: none;
  border-radius: 0.5em;
  padding-left: 2em;
  font-family: ${fontFamily.primary};
  box-shadow: 0px 2px 30px ${shades.gray50};
  font-size: 1em;
`;

const Textfield = ({ placeholder, buttonLabel, url, margin, theme, name, type, required }) => (
  <>
    <StyledWrapper margin={margin}>
      <StyledInput name={name} placeholder={placeholder} type={type} required={required} />
      {buttonLabel && (
        <Button type="button" isSubmit theme={getSecondaryColor(theme)}>
          {buttonLabel}
        </Button>
      )}
    </StyledWrapper>
  </>
);

export default Textfield;
