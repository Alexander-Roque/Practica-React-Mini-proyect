import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import * as React from "react"
import { useStore } from './hook/useStore'



function App() {
  const {fromLanguage, setFromLanguage} = useStore()

  return (
    <>
    <div className='App'>
    <h1>Google Translate</h1>
    <button onClick={()=> {setFromLanguage('es')}}>Cambiar a Español</button>
    </div>
    </>
  )
}

export default App
