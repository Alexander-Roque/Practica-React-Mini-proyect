import type { AUTO_LANGUAGES, SUPPORT_LANGUAGES } from "./constants"

export type Language = keyof typeof SUPPORT_LANGUAGES
export type AutoLanguages = typeof AUTO_LANGUAGES
export type FromLanguages = Language | AutoLanguages

export interface State {
  fromLanguage: FromLanguages,
  toLanguage: Language,
  fromText: string,
  result: string,
  loading: boolean
}

export type Action = | {type:'SET_FROM_LANGUAGE', payload:FromLanguages} | {type:'INTERCHANGE_LANGUAGES'} | {type: 'SET_TO_LANGUAGE', payload:Language} | {type: 'SET_FROM_TEXT', payload: string} | {type: 'SET_RESULT', payload: string}

export enum SectionType {
  From='from',
  To= 'to'
}
