
function ListOfMovie({movie}) {
    return (
        <ul className="movies">{movie.map(movie=>(
          <li className="movie" key={movie.id}>
            <h1>{movie.title}</h1>
            <p>{movie.year}</p>
            <img src={movie.img} alt={movie.Title}></img>
          </li>
        ))}</ul>
    )
}

function NotOfMovie(){
    
    return (
          <p>No se encontraron resultados para esta busqueda</p>
    )
}

export default function Movies ({movie}) {
      const hasMovie = movie?.length > 0

    return(
        hasMovie ? <ListOfMovie movie={movie} /> : <NotOfMovie />
    )
}

