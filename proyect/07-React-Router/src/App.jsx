import * as React from "react"
import { EVENT } from './consts'
import HomePage from "./pages/home";
import { About } from "./pages/about";



function App() {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(()=>{
    const onLocationChange = ()=> {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENT.PUSHSTATE, onLocationChange)
    window.addEventListener('popstate', onLocationChange)
    
    return () => {
    window.removeEventListener(EVENT.POPSTATE, onLocationChange)
    window.removeEventListener('popstate',onLocationChange)
    }

  }, []);

  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <About />}
    </main>
  )
}

export default App
