import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface movieProps {
  movie: {
    id: number;
    title: string;
    release_date: string;
    vote_average: string;
    overview: string;
    image: string;
  };
}

export default function MovieCard({ movie }: movieProps) {
  return (
    <Grid item xs={6} md={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={movie.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.overview}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">fav</Button>
          <Button size="small">Add</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
