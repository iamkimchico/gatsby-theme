import { TSizes } from '../types';

const breakpoints: TSizes<number> = {
  XS: 576,
  SM: 768,
  MD: 992,
  LG: 1200,
  XL: 1400,
  MX: 1900,
};

const colRelation: TSizes<number> = {
  XS: 2,
  SM: 3,
  MD: 3,
  LG: 4,
  XL: 4,
  MX: 6,
};

const spacing: TSizes<string> = {
  XS: '0em',
  SM: '1em',
  MD: '2em',
  LG: '4em',
  XL: '6em',
  MX: '8em',
};

const fontSize: TSizes<number> = {
  XS: 10,
  SM: 12,
  MD: 14,
  LG: 16,
  XL: 18,
  MX: 20,
};

const shades: { [key: number]: string } = {
  1: '#292f36',
  2: '#4d5258',
  3: '#808489',
  4: '#adb1b6',
  5: '#e2e2e2',
  6: '#f2f2f3',
  7: '#f6f6f6',
};

const zLevels: { [key: number]: number } = {
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
  6: 600,
  7: 700,
  8: 800,
  9: 900,
  10: 1000,
};

const media: TSizes<string> = {
  XS: `(min-width: ${breakpoints.XS}px)`,
  SM: `(min-width: ${breakpoints.SM}px)`,
  MD: `(min-width: ${breakpoints.MD}px)`,
  LG: `(min-width: ${breakpoints.LG}px)`,
  XL: `(min-width: ${breakpoints.XL}px)`,
  MX: `(min-width: ${breakpoints.MX}px)`,
};

const MINHEIGHT = '40em';
const MAXWIDTH = '2000px';

export default { shades, breakpoints, media, zLevels, colRelation, MINHEIGHT, MAXWIDTH, spacing, fontSize };
