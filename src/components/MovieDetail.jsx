import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  useMediaQuery,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from '@mui/material/styles';
import { useMovies } from '../context/MovieContext';

const API_KEY = '9647a42e61a8c31086ddfd6681eab541';

const MovieDetail = () => {
  const { selectedMovie, setSelectedMovie } = useMovies();
  const [detail, setDetail] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (!selectedMovie) return;

    const fetchDetail = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${selectedMovie.id}?api_key=${API_KEY}&append_to_response=videos,credits`
      );
      const data = await res.json();
      setDetail(data);
    };

    fetchDetail();
  }, [selectedMovie]);

  if (!selectedMovie || !detail) return null;

  const trailer = detail.videos?.results.find((v) => v.type === 'Trailer');

  return (
    <Dialog
      open={!!selectedMovie}
      onClose={() => setSelectedMovie(null)}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {detail.title}
        <IconButton
          aria-label="close"
          onClick={() => setSelectedMovie(null)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ bgcolor: theme.palette.background.default }}>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          {detail.overview}
        </Typography>

        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Genres:</strong> {detail.genres.map((g) => g.name).join(', ')}
        </Typography>

        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body2">
            <strong>Rating:</strong>
          </Typography>
          <StarIcon sx={{ fontSize: 18, color: 'gold' }} />
          <Typography variant="body2">{detail.vote_average}</Typography>
        </Box>

        {trailer && (
          <Box mt={3}>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="YouTube Trailer"
              allowFullScreen
              style={{ borderRadius: '8px', width: '100%' }}
            />
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MovieDetail;
