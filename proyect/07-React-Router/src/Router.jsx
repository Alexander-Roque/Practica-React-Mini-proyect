import * as React from "react"
import { EVENT } from "./consts";
import {match} from "path-to-regexp"


export function Router({children, routes = [], defaultComponent: DefaultComponent = ()=> <h1>Error 404</h1>}) {
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
  let routeParams = {}

  // añadiremos las rutas que vienen dentro de los componentes children de <Route>
  const routesFromChildren = React.Children.map(children,({props, type}) => {
    // const {props, type} = children;
    const {name} = type;
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren)

  // Se realizo todo esto con la finalidad de aceptar rutas dinamicas ejm: /search/:polo 
  const Page = routesToUse.find(({path})=>{
      if (path === currentPath)return true

     const matherURL = match(path, {decode: decodeURIComponent});
     const matched = matherURL(currentPath)
     if (!matched) return false

    //  mientras que esto simplemente guarda la ruta que eran dinamicas, para luego ser extraida por path-to-regexp. ejm: si mi ruta dinamica es /search/:polo, la ruta ingresa o capturada debe ser similar a /search/polos-blancos
     routeParams = matched.params
     return true
  })?.Component

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent />
}
