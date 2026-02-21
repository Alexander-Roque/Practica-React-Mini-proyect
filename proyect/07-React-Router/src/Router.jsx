import * as React from "react"
import { EVENT } from "./consts";
import {match} from "path-to-regexp"


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
  const routesParams = {}


  const Page = routes.find(({path})=>{
      if (path === currentPath)return true

     const matherURL = match(path, {decode: decodeURIComponent});
     const mathed = matherURL(currentPath)
     if (!mathed) return false

  })?.Component

  return Page ? <Page /> : <DefaultComponent />
}
