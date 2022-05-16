import { movieProps } from "../interfaces/interfaces";
import MovieCard from "./MovieCard";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

interface listProps {
  title?: string;
  list: movieProps[];
}

const MovieListSection = ({ list, title }: listProps) => {
  return (
    <section id={title}>
      <Typography variant="h4" sx={{ fontWeight: "700" }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {list?.[0]
          ? list.map((ListItem) => (
              <MovieCard movie={ListItem} key={ListItem.id} />
            ))
          : null}
      </Grid>
    </section>
  );
};

export default MovieListSection;
