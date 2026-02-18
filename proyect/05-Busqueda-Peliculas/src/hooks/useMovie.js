import React from 'react';
import { searchMovie } from '../service/movies';

export function useMovie({search, sort}) {
  const [movies, setMovies] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const previousSearch = React.useRef(search)

  const getMovie = React.useCallback(async({search})=>{
      if(search === previousSearch.current) return;

      try {
        setLoading(true)
        setError(null)
        const newMovies = await searchMovie({search})
        previousSearch.current = search
     
        setMovies(newMovies)
        
      } catch (error) {
        setError(error.message)
      } finally{
        setLoading(false)
      }
    }
  ,[])

  const sortedMovies = React.useMemo (()=>{
    console.log("sortedMovie")
    const sorted = sort ? [...movies].sort((a,b)=>a.title.localeCompare(b.title)) : movies
    return sorted
  }
,[sort, movies])

  return {movies: sortedMovies,getMovie, loading}
  
}

// sort organiza los array segun + , - o =; si el resultado es a b o 10 20, si a es menor que b este va antes y si tenemos al revez 20 10, si a es mayor que b este va despues 
// sort organiza el array segun los valores que yo le pase + o -, para que funcione correctamente debe cumplir a < b, b > a y a === b
// otro dato no debes colocar en el sort < o > el codigo se rompe porque devuelve true o false

// sort para numeros: a - b
//sort para condicionales: (a, b) => {
//   if (a < b) return -1
//   if (a > b) return 1
//   return 0
// }
// sort para string: (a, b) => a.localeCompare(b)

// No usar useMemo si no tenemos un problemas de rendimiento, debemos saber medir el rendimiento de nuestra app web
