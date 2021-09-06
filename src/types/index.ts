import * as Icons from '../icon/IconList';

export type TSizes<T> = {
  XXS?: T;
  XS: T;
  SM: T;
  MD: T;
  LG: T;
  XL: T;
  MX: T;
};

export type TIconNames = keyof typeof Icons;
export type TAlignNames = 'left' | 'center' | 'right';
export type TBgSizes = 'cover' | 'contain';
export type TLinkTarget = '_blank' | '_self' | '_top' | 'framename';
export type TColorScheme = 'Primary' | 'Secondary' | 'Tertiary' | 'Black' | 'White';
export type TSizeNames = 'XS' | 'SM' | 'MD' | 'LG' | 'XL' | 'MX';
export type TColNames = 'inner' | 'outer-x' | 'outer-xx' | 'outer-xxx' | 'edge';
export type TBgPositions =
  | 'left top'
  | 'left center'
  | 'left bottom'
  | 'right top'
  | 'right center'
  | 'right bottom'
  | 'center top'
  | 'center center'
  | 'center bottom';

export type TThemePlugin = {
  prismicRepo: string;
  prismicToken: string;
};

export type TColors = { base: string; major: string; minor: string; black: string; white: string };
export type TDirection = 'left' | 'right';
