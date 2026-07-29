import { movies } from "./data/movies";
import MovieCard from "./components/MovieCard";
import './App.css'

function App() {

  return (
    <main className="bg-amber-400 grid ">
      <h1>
        Catalogo de peliculas
      </h1>
      <div className="bg bg-purple-700 justify-between m-2 text-center">
      {movies.map((pelicula) => (
        <MovieCard key={pelicula.id} movie={pelicula} />
      ))}        
      </div>
    </main>

  )
}

export default App
