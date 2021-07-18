import { getFontSize } from '../helpers';
import { TSizeNames } from '../types';

export const replaceEach = (string: string, remove: string, replace: string): string => {
  const re = new RegExp(remove, 'g');
  return string.replace(re, replace);
};

export const capitalize = (s: string): string => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const underscoreToCamelCase = (string: string): string => {
  let result = '';
  const splitted = string.split('_');
  splitted.forEach((part: string, index: number) => {
    if (index > 0) {
      result += capitalize(part);
    } else {
      result = part;
    }
  });

  return result;
};

export const formatNumber = (number: number): string => Number(number).toLocaleString('da-dk');

export const groupByProp = <T>(arr: T[], keys: (keyof T)[]): { [key: string]: T[] } =>
  arr.reduce((storage, item) => {
    const objKey = keys.map((key) => `${item[key]}`).join(':');
    if (storage[objKey]) {
      storage[objKey].push(item);
    } else {
      // eslint-disable-next-line no-param-reassign
      storage[objKey] = [item];
    }
    return storage;
  }, {} as { [key: string]: T[] });

export const toPerfectPixel = (sizeInEm: number, viewport: TSizeNames): string => {
  const bodyFontSizeInPx = parseInt(getFontSize(viewport).replace('px', ''), 10);
  const computedSize = sizeInEm * bodyFontSizeInPx;
  const roundedNumber = 2 * Math.round(computedSize / 2);

  if (roundedNumber > 0) {
    return `${roundedNumber}px`;
  }
  return '1px';
};
