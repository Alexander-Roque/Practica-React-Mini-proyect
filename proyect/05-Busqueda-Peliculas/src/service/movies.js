const API_KEY = '99b6c647'

export async function searchMovie({search}) {
    const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=%27${search}%27`

    if(search === '') return null

    try {
        const response = await fetch(URL);
        const json = await response.json()

        const movies = json.Search

        return movies?.map((movie)=>({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            img: movie.Poster
        }))
    } catch (error) {
        throw new Error(error)
    }
}
