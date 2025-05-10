import React from 'react';
import { useMovies } from '../context/MovieContext';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

const MovieCard = ({ movie }) => {
  const { setSelectedMovie } = useMovies();

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
    : 'https://via.placeholder.com/300x450';

  return (
    <Card
      sx={{
        borderRadius: 2,
        transition: 'transform 0.3s ease',
        '&:hover': { transform: 'scale(1.05)' },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={() => setSelectedMovie(movie)}
    >
      <CardActionArea sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          height="450"
          image={imageUrl}
          alt={movie.title}
        />
        <CardContent>
          <Typography variant="subtitle1" fontWeight="600" noWrap>
            {movie.title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {movie.release_date?.split('-')[0]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
