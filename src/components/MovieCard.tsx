import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MovieCardControls from "./MovieCardControls";
import { movieProps } from "../interfaces/interfaces";
import { Rating } from "@mui/material";

const MovieCard = ({ movie }: { movie: movieProps }) => {
  let score = Math.round(movie.vote_average * 0.1 * 5);
  return (
    <Grid item xs={6} md={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={movie.title}
          height="200"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />

        <CardContent sx={{ height: 150, overflow: "hidden" }}>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Rating name="read-only" value={score} readOnly />
          <Typography variant="body2" color="text.secondary">
            {movie.overview}
          </Typography>
        </CardContent>
        <MovieCardControls movie={movie} />
      </Card>
    </Grid>
  );
};

export default MovieCard;
