import { useTheme } from 'styled-components';

export const getColors = (
  scheme: string,
): { base: string; major: string; minor: string; black: string; white: string } => {
  const theme = useTheme();
  const schemas = theme.design.color_schemas;

  let base = theme.design.black_color;
  let major = theme.design.black_color;
  let minor = theme.design.black_color;

  if (scheme === null || scheme === undefined) {
    // eslint-disable-next-line no-console
    console.log('Error: No color scheme is provided');
  } else if (scheme.toLowerCase() === 'white') {
    base = theme.design.white_color;
    major = theme.design.white_color;
    minor = theme.design.white_color;
  } else if (scheme.toLowerCase() !== 'black') {
    // We lowerCase here just to make sure that if users forget capital cases then we find the right color scheme anyway
    const schema = schemas.find((s: any) => s.name.toLowerCase() === scheme.toLowerCase());
    if (schema) {
      base = schema.base;
      major = schema.major;
      minor = schema.minor;
    }
  }

  return { base, major, minor, black: theme.design.black_color, white: theme.design.white_color };
};
