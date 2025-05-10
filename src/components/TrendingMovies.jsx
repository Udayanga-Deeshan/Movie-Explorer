import React from 'react';
import { useMovies } from '../context/MovieContext';
import MovieCard from './MovieCard';
import { Flame } from 'lucide-react';

const TrendingMovies = () => {
  const { trending } = useMovies();

  return (
    <div className="mt-8 px-4 sm:px-6 md:px-8 max-w-screen-xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-2 text-center sm:text-left">
        <Flame className="text-red-500 dark:text-red-400 w-6 h-6" />
        Trending Today
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {trending.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
