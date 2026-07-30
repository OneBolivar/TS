import { movies } from "./data/movies";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      {/* Encabezado */}
      <header className="mb-8 border-b border-slate-800 pb-4">
        <h1 className="bg text-2xl font-bold text-slate-100">
          Catálogo de Películas
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Explora los clásicos del cine
        </p>
      </header>

      {/* Grid Responsivo de Películas */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </main>
    </div>
  );
}

export default App;