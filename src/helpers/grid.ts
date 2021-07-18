import base from '../styles/base';
import { TColNames, TSizeNames } from '../types';

export const getFontSize = (size: TSizeNames): string => `${base.fontSize[size]}px`;

export const getColSize = (size: TSizeNames): string => `${base.colRelation[size]}em`;

export const getGridGap = (size: TSizeNames): string => `${base.colRelation[size] / 2}em`;

export const getColPadding = (col: TColNames, size: TSizeNames): string => {
  switch (col) {
    case 'edge':
      return `${base.colRelation[size] * 0}em`;
    case 'outer-xxx':
      return `${base.colRelation[size] * 1}em`;
    case 'outer-xx':
      return `${base.colRelation[size] * 2}em`;
    case 'outer-x':
      return `${base.colRelation[size] * 3}em`;
    case 'inner':
      return `${base.colRelation[size] * 4}em`;
    default:
      return ``;
  }
};

export const getGridLayout = (size: TSizeNames): string => `
    [edge-left] 
    ${getColSize(size)} 
    [outer-xxx-left] 
    ${getColSize(size)}
    [outer-xx-left]
    ${getColSize(size)}
    [outer-x-left]
    ${getColSize(size)}
    [inner-left] 
    1fr 
    [inner-right] 
    ${getColSize(size)}
    [outer-x-right] 
    ${getColSize(size)}
    [outer-xx-right]
    ${getColSize(size)} 
    [outer-xxx-right] 
    ${getColSize(size)}
    [edge-right]`;
