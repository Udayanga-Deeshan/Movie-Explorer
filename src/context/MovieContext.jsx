import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '9647a42e61a8c31086ddfd6681eab541';
const BASE_URL = 'https://api.themoviedb.org/3';

const MovieContext = createContext();
export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('lastSearch') || '');
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [page, setPage] = useState(1);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    fetchTrending();
    if (searchQuery) fetchMovies(searchQuery, 1);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('lastSearch', searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const fetchTrending = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, {
        params: { api_key: API_KEY },
      });
      setTrending(data.results);
    } catch (error) {
      console.error('Failed to fetch trending movies:', error);
      alert('Failed to load trending movies.');
    }
  };

  const fetchMovies = async (query, pageNo = 1) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query,
          page: pageNo,
        },
      });
      setMovies(prev => pageNo === 1 ? data.results : [...prev, ...data.results]);
      setPage(pageNo);
    } catch (error) {
      console.error('Error fetching search results:', error);
      alert('Error fetching movies.');
    }
  };

  const value = {
    searchQuery, setSearchQuery,
    movies, fetchMovies, page,
    trending,
    selectedMovie, setSelectedMovie,
    favorites, setFavorites,
    darkMode, setDarkMode,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};
