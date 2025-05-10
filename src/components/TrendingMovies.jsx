import React from 'react';
import { useMovies } from '../context/MovieContext';
import MovieCard from './MovieCard';

const TrendingMovies = () => {
  const { trending } = useMovies();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">🔥 Trending Today</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {trending.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
