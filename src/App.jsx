import React from 'react';
import { MovieProvider } from './context/MovieContext';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TrendingMovies from './components/TrendingMovies';
import MovieDetail from './components/MovieDetail';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <MovieProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <Header />
        <main className="p-4">
          <SearchBar />
          <SearchResults/>
          <TrendingMovies />
          <MovieDetail />
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
