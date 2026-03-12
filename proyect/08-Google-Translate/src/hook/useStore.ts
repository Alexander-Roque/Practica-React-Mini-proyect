import { AUTO_LANGUAGES } from '../constants';
import type { FromLanguages, Language, State } from '../types'
import type { Action } from '../types.d'
import * as React from "react"


// 1.creamos el initial state
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'english',
  fromText: '',
  result: '',
  loading: false
}

// 2. creamos el reducir
function reducer(state: State, action: Action){
  const {type} = action;
  
  if(type === "INTERCHANGE_LANGUAGES"){
    if(state.fromLanguage === AUTO_LANGUAGES) return state
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if(type === "SET_FROM_LANGUAGE"){
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if(type === "SET_TO_LANGUAGE"){
    return{
      ...state,
      toLanguage: action.payload
    }
  }

  if(type === "SET_FROM_TEXT"){
    return{
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if(type === "SET_RESULT"){
    return{
      ...state,
      loading: false,
      result: action.payload
    }
  }

  return state
}

export function useStore() {
      const [{fromLanguage, toLanguage, fromText, result, loading}, dispatch] = React.useReducer(reducer, initialState)

      const interchangeLanguages = () => {dispatch({type: 'INTERCHANGE_LANGUAGES'})}

      const setFromLanguage = (payload:FromLanguages) => {
        dispatch({type: 'SET_FROM_LANGUAGE', payload})
      }

      const setToLanguage = (payload: Language) => {
        dispatch ({type: 'SET_TO_LANGUAGE', payload})
      }

      const setFromText = (payload: string) => {
        dispatch ({type:'SET_FROM_TEXT', payload})
      }

      const setResult = (payload: string) => {
        dispatch ({type:'SET_RESULT', payload})
      }
    
      return {fromLanguage, toLanguage, fromText, result, loading, interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResult}
}
