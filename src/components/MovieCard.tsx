import type { Movie } from "../data/movies";
interface MovieCardProps {
    movie: Movie;
}

function MovieCard({ movie } : MovieCardProps) {
  return (
<article className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-gray-800 text-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Contenedor de la Imagen */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={movie.imagen}
          alt={movie.titulo}
        />
        {/* Badge de Puntuación flotante arriba a la derecha */}
        <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-amber-400 text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-amber-400/30">
          ★ {movie.puntuacion}
        </span>
      </div>

      {/* Contenido de la Card */}
      <div className="p-5 flex flex-col gap-3">
        {/* Título y Año */}
        <div>
          <h3 className="text-xl font-bold text-white leading-snug">
            {movie.titulo}
          </h3>
          <span className="text-sm font-medium text-gray-400">
            {movie.anio} • {movie.duracion} min
          </span>
        </div>

        {/* Género y Director */}
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-purple-900/60 text-purple-300 px-2.5 py-1 rounded-md font-semibold border border-purple-500/30">
            {movie.genero}
          </span>
          <span className="bg-gray-700 text-gray-300 px-2.5 py-1 rounded-md">
            Dir: {movie.director}
          </span>
        </div>

        {/* Descripción */}
        <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed mt-1">
          {movie.descripcion}
        </p>
      </div>
    </article>
  );
}

export default MovieCard;