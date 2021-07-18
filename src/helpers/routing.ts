import { getLangShort } from '.';

export const createUrl = (uid:string, lang:string) => {
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
