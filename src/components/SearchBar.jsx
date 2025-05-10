import React, { useState } from 'react';
import { useMovies } from '../context/MovieContext';
import {
  TextField,
  InputAdornment,
  IconButton,
  Box,
  useTheme
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const { setSearchQuery, fetchMovies } = useMovies();
  const [input, setInput] = useState('');
  const theme = useTheme();

  const handleSearch = () => {
    setSearchQuery(input);
    fetchMovies(input, 1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '600px',
        mx: 'auto',
        px: { xs: 2, sm: 3 },
        my: { xs: 2, sm: 3 }
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search movies..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        sx={{
          backgroundColor:
            theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
          borderRadius: 1,
          boxShadow: 1,
          input: {
            color: theme.palette.text.primary
          }
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleSearch}
                edge="end"
                aria-label="search"
                sx={{
                  color:
                    theme.palette.mode === 'dark'
                      ? theme.palette.grey[300]
                      : theme.palette.primary.main
                }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Box>
  );
};

export default SearchBar;
