import * as React from "react"
import { lazy, Suspense } from "react";
import HomePage from "./pages/home";
import { Router } from "./Router";
import Error404 from "./pages/Error";
import SearchDinamy from "./pages/SearchDinamy";
import Route from "./Route";

const LazyAboutPage = lazy(()=>import('./pages/about.jsx'))

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchDinamy
  }
]

function App() {

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
      <Router routes={appRoutes} defaultComponent={Error404}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={LazyAboutPage} />
      </Router>
      </Suspense>
    </main>
  )
}

export default App
