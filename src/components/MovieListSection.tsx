import { movieProps } from "../interfaces/interfaces";
import MovieCard from "./MovieCard";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

interface listProps {
  title?: string;
  list: movieProps[];
}

export default function MovieListSection({ list, title }: listProps) {
  return (
    <section id={title}>
      <Typography variant="h4" sx={{ fontWeight: "700" }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {list?.[0] ? list.map((item) => <MovieCard movie={item} />) : null}
      </Grid>
    </section>
  );
}
