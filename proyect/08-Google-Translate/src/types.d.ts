import type { AUTO_LANGUAGES, SUPPORT_LANGUAGES } from "./constants"

export type Language = keyof typeof SUPPORT_LANGUAGES
export type AutoLanguages = typeof AUTO_LANGUAGES
export type FromLanguages = Language | AutoLanguages

export interface State {
  fromLanguage: string,
  toLanguage: string,
  fromText: string,
  result: string,
  loading: boolean
}

export type Action = | {type:'SET_FROM_LANGUAGE', payload:string} | {type:'INTERCHANGE_LANGUAGES'} | {type: 'SET_TO_LANGUAGE', payload:string} | {type: 'SET_FROM_TEXT', payload: string} | {type: 'SET_RESULT', payload: string}
