import * as React from "react"
import { EVENT } from "./consts";


export function Router({routes = [], defaultComponent: DefaultComponent = ()=> <h1>Error 404</h1>}) {
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
  const Page = routes.find(({path})=> path === currentPath)?.Component

  return Page ? <Page /> : <DefaultComponent />
}
