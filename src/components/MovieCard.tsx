import type { Movie } from "../data/movies";
interface MovieCardProps {
    movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="movie-card">
      <div>
        {/* Usamos el póster y creamos un alt descriptivo */}
        <img className="movie-poster" src={movie.poster} alt={`Póster de ${movie.title}`} />
        <span className="movie-rating">⭐ {movie.rating}</span>
      </div>

      <div>
        <header>
          <h2 className="movie-tittle">{movie.title}</h2>
          <span>{movie.year}</span>
        </header>

        <div>
          <p><strong>Género:</strong> {movie.genre}</p>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Duración:</strong> {movie.duration} minutos</p>
        </div>

        <p>{movie.description}</p>

        <button className="movie-button" type="button">Ver detalles</button>
      </div>
    </article>
  );
}

export default MovieCard;