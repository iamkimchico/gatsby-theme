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

export const resolveLink = (link: any): string => {
  if (link?.link_type === 'Document') {
    if (link?.document?.uid === 'forside') {
      return '';
    }

    if (link?.document?.uid) {
      return link.document.uid;
    }
  }

  return '';
};
