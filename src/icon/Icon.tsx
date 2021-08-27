import React, { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { TIconNames, TSizeNames } from '../types';
import * as Icons from './IconList';

type TProps = {
  icon: TIconNames;
  color: string;
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

export const Icon: React.FC<TProps> = ({ icon, color, size }) => {
  const theme = useContext(ThemeContext);
  const IconComponent = Icons[icon];

  const primary = color;
  const secondary = color;
  const shadow = 'rgba(0,0,0,0.1)';

  // switch (theme) {
  //   case "black":
  //     primary = colors.black
  //     secondary = colors.black
  //     break
  //   case "white":
  //     primary = colors[theme]
  //     secondary = colors[theme]
  //     break
  //   default:
  //     primary = colors.black
  //     secondary = colors.black
  // }

  return (
    <StyledIcon size={size} primary={primary} secondary={secondary} shadow={shadow}>
      {IconComponent && <IconComponent />}
    </StyledIcon>
  );
};
