import * as React from "react"
import { EVENT } from './consts'
import HomePage from "./pages/home";
import { About } from "./pages/about";
import { Router } from "./Router";
import Error404 from "./pages/Error";

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path:'/about',
    Component: About
  },
  {
    path: "/search/:query",
    Component: () => <h1>Buscardor</h1>
  }
]

function App() {

  return (
    <main>
      <Router routes={routes} defaultComponent={Error404}/>
    </main>
  )
}

export default App
