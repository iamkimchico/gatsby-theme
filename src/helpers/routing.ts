import { getLangShort } from './localization';

export const createUrl = (uid: string, lang: string): string => {
  let formattedLang = `${getLangShort(lang)}`;
  let formattedSlug = uid;

  if (lang === 'da-dk') {
    formattedLang = '';
  }

  if (uid === 'forside') {
    formattedSlug = '';
  }

  return `${formattedLang}/${formattedSlug}`;
};
