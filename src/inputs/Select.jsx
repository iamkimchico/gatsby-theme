import React from 'react';
import { default as ReactSelect } from 'react-select';
import styled from 'styled-components';
import { spacing, fontFamily, shades, getSecondaryColor, colors, zLevels } from '../../constants';
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

const colourStyles = {
  indicatorSeparator: () => {},
  control: (styles) => ({
    ...styles,
    backgroundColor: colors.white,
    border: 'none',
    fontFamily: fontFamily.primary,
    height: '4em',
    boxShadow: `0px 2px 30px ${shades.gray50}`,
    borderRadius: '0.5em',
    paddingLeft: '1em ',
    paddingRight: '1em ',
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: colors.white,
    border: 'none',
    fontFamily: fontFamily.primary,
    boxShadow: `0px 2px 30px ${shades.gray50}`,
    borderRadius: '0.5em',
    padding: '1em',
  }),
  option: (styles) => ({
    ...styles,
    color: 'black',
    borderRadius: '0.2em',
    background: 'none',
    cursor: 'pointer',
    ':hover': {
      ...styles[':hover'],
      backgroundColor: shades.gray70,
    },
  }),
};

const Select = ({ margin, placeholder, isSearchable, options, defaultValue, onChange }) => (
  <StyledWrapper margin={margin}>
    <ReactSelect
      defaultValue={defaultValue}
      styles={colourStyles}
      placeholder={placeholder}
      isSearchable={isSearchable}
      options={options}
      onChange={onChange}
    />
  </StyledWrapper>
);

export default Select;
