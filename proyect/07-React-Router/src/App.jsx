import * as React from "react"
import { EVENT } from './consts'
import HomePage from "./pages/home";
import { About } from "./pages/about";
import { Router } from "./Router";

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
    path: "/cori",
    Component: () => <h1>Cori Gordo Perdedor</h1>
  }
]

function App() {

  return (
    <main>
      <Router routes={routes} />
    </main>
  )
}

export default App
