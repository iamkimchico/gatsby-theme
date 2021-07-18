import { languageSettings } from "../data"

export const getLangShort = (longLang:string) => languageSettings.languages.find(
    language => language.codeLong === longLang
  )?.codeShort