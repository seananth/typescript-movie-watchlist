import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MovieCardControls from "./MovieCardControls";

import { movieProps } from "../interfaces/interfaces";

interface movieCard {
  movie: movieProps;
}

export default function MovieCard({ movie }: movieCard) {
  return (
    <Grid item xs={6} md={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={movie.title}
          height="200"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.overview}
          </Typography>
        </CardContent>
        <MovieCardControls />
      </Card>
    </Grid>
  );
}
