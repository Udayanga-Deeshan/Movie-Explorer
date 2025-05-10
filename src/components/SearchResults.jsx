import React from 'react';
import { useMovies } from '../context/MovieContext'; 
import MovieCard from './MovieCard';
import Button from '@mui/material/Button';

const SearchResults = () => {
  const { movies, searchQuery, fetchMovies, page } = useMovies();

  const handleLoadMore = () => {
    fetchMovies(searchQuery, page + 1);
  };

  if (!searchQuery) return null;

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 max-w-screen-xl mx-auto mt-8">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-center sm:text-left">
        Search Results for: <span className="italic text-blue-600 dark:text-blue-400">{searchQuery}</span>
      </h2>

      {movies.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center">No results found.</p>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button
              variant="contained"
              color="primary"
              onClick={handleLoadMore}
              sx={{
                fontWeight: 'bold',
                textTransform: 'none',
                borderRadius: 2,
                px: 4,
                py: 1.5,
                boxShadow: 2,
                bgcolor: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              Load More
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResults;
