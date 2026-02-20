import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import * as React from "react"

const NAVIGATION_EVENT = 'pushState'

function navigate (href){
  window.history.pushState({},'',href)
  const navigativeEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigativeEvent)
}

function HomePage() {
  return (
    <>
    <h1>Home</h1>
    <p>Esta es una pagina de ejemplo para mostrar el funcionamiento de React Router</p>
    <button onClick={()=>navigate('/about')}>Ir a Nosotros</button>
    </>
  )
}

function About(){
  return(
    <>
    <h1>About</h1>
    <div>
      <img src='../public/Cori.png' alt='Foto del rey Pixie'/>
    <p>Hola soy Alex y estoy creando una ruta para React Router</p>
    </div>
    <button onClick={()=>navigate('/')}>Ir a home</button>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(()=>{
    const onLocationChange = ()=> {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)
    
    return () => {
    window.removeEventListener(NAVIGATION_EVENT, onLocationChange)}

  }, []);

  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <About />}
    </main>
  )
}

export default App
