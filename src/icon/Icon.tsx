import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { TIconNames, TSizeNames, TColorScheme } from '../types';
import * as Icons from './IconList';

type TProps = {
  icon: TIconNames;
  colorScheme: TColorScheme;
  size: TSizeNames;
};

type TStyledProps = {
  primary: string;
  secondary: string;
  shadow: string;
  size: string;
};

const StyledIcon = styled.div<TStyledProps>`
  display: grid;

  svg {
    align-self: center;
    justify-self: center;
    height: ${(props) => (props.size === 'lg' ? '3em' : props.size === 'md' ? '2em' : '1.5em')};

    .a {
      fill: ${(props) => props.shadow};
    }

    .b {
      fill: none;
    }

    .c {
      fill: ${(props) => props.secondary};
    }

    .d {
      fill: ${(props) => props.primary};
    }

    .noFill {
      fill: none;
    }
  }
`;

export const Icon: React.FC<TProps> = ({ icon, colorScheme, size }) => {
  const theme = useContext(ThemeContext);
  const IconComponent = Icons[icon];

  const primary = 'black';
  const secondary = 'blue';
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
