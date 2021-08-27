import React from 'react';
import ReactSelect, { StylesConfig, ValueType } from 'react-select';
import styled, { css, useTheme } from 'styled-components';
import { TSizeNames } from '../types';

export type TOption = {
  label: string;
  value: string;
};

type TProps = {
  margin: TSizeNames;
  placeholder: string;
  isSearchable: boolean;
  options: TOption[];
  defaultValue: ValueType<TOption, false>;
  onChange: (value: TOption | TOption[] | null) => void;
};

const StyledWrapper = styled.div<{ margin: TSizeNames }>`
  position: relative;
  width: 100%;
  max-width: 25em;
  > span {
    position: absolute;
    right: 3em;
    top: 1.3em;
  }
  ${({ theme, margin }) => css`
    margin-top: ${theme.base.spacing[margin]};
    margin-bottom: ${theme.base.spacing[margin]};
  `}
`;

const colourStyles = (): Partial<StylesConfig<TOption, false>> => {
  const theme = useTheme();

  return {
    indicatorSeparator: () => ({ display: 'none' }),
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.design.white_color,
      border: 'none',
      fontFamily: theme.design.primary_font,
      height: '4em',
      boxShadow: `0px 2px 30px ${theme.base.shades[5]}`,
      borderRadius: '0.5em',
      paddingLeft: '1em ',
      paddingRight: '1em ',
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: theme.design.white_color,
      border: 'none',
      fontFamily: theme.design.primary_font,
      boxShadow: `0px 2px 30px ${theme.base.shades[5]}`,
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
        backgroundColor: theme.base.shades[7],
      },
    }),
  };
};

const Select: React.FC<TProps> = ({ margin, placeholder, isSearchable, options, defaultValue, onChange }) => (
  <StyledWrapper margin={margin}>
    <ReactSelect
      defaultValue={defaultValue}
      styles={colourStyles()}
      placeholder={placeholder}
      isSearchable={isSearchable}
      options={options}
      onChange={onChange}
    />
  </StyledWrapper>
);

export default Select;
