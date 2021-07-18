import * as Icons from '../icon/IconList';

export type TSizes<T> = {
  XS: T;
  SM: T;
  MD: T;
  LG: T;
  XL: T;
  MX: T;
};

export type TIconNames = keyof typeof Icons;
export type TAlignNames = 'left' | 'center' | 'right';
export type TColorScheme = 'primary' | 'secondary' | 'tertiary' | 'black' | 'white';
export type TSizeNames = 'XS' | 'SM' | 'MD' | 'LG' | 'XL' | 'MX';
export type TColNames = 'inner' | 'outer-x' | 'outer-xx' | 'outer-xxx' | 'edge';
