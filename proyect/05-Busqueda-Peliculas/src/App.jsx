import './App.css'
import Movies from './components/Movie';
import { useMovie } from './hooks/useMovie';
import * as React from "react"

function useSearch() {
  const [search, setSearch] = React.useState("");
  const [error, setError] = React.useState(null)
  const firtsRender = React.useRef(true)

  React.useEffect(()=> {
    if(firtsRender.current){
      firtsRender.current = search === '';
      return
    }

    if(search === '') {
      setError('No se puede buscar peliculas vacias')
      return
    }
    if(search.match(/^\d+$/)){
      setError("No se puede buscar una pelicula con un numero")
      return
    }
    if(search.length < 3) {
      setError("Se requiere mas de 3 caracteres para buscar una pelicula")
      return
    }
    setError(null)
  },[search])

  return({search, error, setSearch})
}


function App() {
  const [sort, setSort] = React.useState(false)
  
  const {search, error, setSearch} = useSearch()
  const {movies, getMovie, loading} = useMovie({search, sort})

  function handleSubmit(event){
    event.preventDefault()
    getMovie({search})
  }

  function handleChange(event){
    const newSearch = event.target.value
    setSearch(newSearch)
    getMovie({search: newSearch})
  }

  function handleSort () {
    setSort (!sort)
  }
  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Avengers, StarWar, Shrek, Pokemon Movie ...' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'> Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Cargando...</p> : 
          <Movies movie={movies}/>
        }
      </main>
    </div>
  )
}

export default App
