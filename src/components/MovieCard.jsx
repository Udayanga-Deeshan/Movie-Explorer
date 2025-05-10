import React from 'react';
import { useMovies } from '../context/MovieContext';

const MovieCard = ({ movie }) => {
  const { setSelectedMovie } = useMovies();
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
    : 'https://via.placeholder.com/300x450';

  return (
    <div
      className="cursor-pointer hover:scale-105 transition transform"
      onClick={() => setSelectedMovie(movie)}
    >
      <img src={imageUrl} alt={movie.title} className="rounded" />
      <h3 className="mt-2 font-semibold text-sm">{movie.title}</h3>
      <p className="text-xs text-gray-600 dark:text-gray-400">{movie.release_date?.split('-')[0]}</p>
    </div>
  );
};

export default MovieCard;
