import React, { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { TColors, TIconNames, TSizeNames } from '../types';
import * as Icons from './IconList';

type TProps = {
  icon: TIconNames;
  color?: string;
  colorScheme?: TColors;
  size: TSizeNames;
};

type TStyledProps = {
  primary: string;
  secondary: string;
  shadow: string;
  size: string;
};

const StyledIcon = styled.div<TStyledProps>`
  ${({ size, shadow, secondary, primary }) => css`
    display: grid;

    svg {
      align-self: center;
      justify-self: center;
      height: ${size === 'LG' ? '6em' : size === 'MD' ? '5em' : '1.5em'};

      .a {
        fill: ${shadow};
      }

      .b {
        fill: none;
      }

      .c {
        fill: ${secondary};
      }

      .d {
        fill: ${primary};
      }

      .noFill {
        fill: none;
      }
    }
  `};
`;

export const Icon: React.FC<TProps> = ({ icon, color, colorScheme, size }) => {
  const IconComponent = Icons[icon];
  let primary = 'black';
  let secondary = 'black';
  const shadow = 'rgba(0,0,0,0.1)';

  if (color) {
    primary = color;
    secondary = color;
  } else if (colorScheme) {
    primary = colorScheme.base;
    secondary = colorScheme.major;
  }

  return (
    <StyledIcon size={size} primary={primary} secondary={secondary} shadow={shadow}>
      {IconComponent && <IconComponent />}
    </StyledIcon>
  );
};
