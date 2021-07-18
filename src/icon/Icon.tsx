import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { TIconNames, TSizeNames, TStyleNames } from '../types';
import * as Icons from './IconList';

type TProps = {
  icon:TIconNames;
  style:TStyleNames;
  size:TSizeNames;
}

type TStyledProps = {
  primary:string;
  secondary:string;
  shadow:string;
  size:string;
}

const StyledIcon = styled.div<TStyledProps>`
  display: grid;

  svg {
    align-self: center;
    justify-self: center;
    height: ${(props) => (props.size === 'lg' ? '3em' : props.size === 'md' ? '2em' : '1.5em')};
    path,
    polygon {
      //
    }
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
    .keepOriginal {
      //
    }
  }
`;

export const Icon:React.FC<TProps> = ({ icon, style, size }) => {
  const theme = useContext(ThemeContext);
  const Icon = Icons[icon];

  console.log(theme, style)

  // console.log(props.theme.design[`${style}_color`]);

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
      {Icon && <Icon />}
    </StyledIcon>
  );
};
