import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import { movieProps } from "../interfaces/interfaces";

interface movieCard {
  movie: movieProps;
}

export default function MovieCardControls({ movie }: movieCard) {
  const { state, dispatch } = useContext(GlobalContext);
  return (
    <CardActions>
      <Button
        size="small"
        onClick={() => dispatch({ type: "ADD_TO_FAVORITES", payload: movie })}
      >
        fav
      </Button>
      <Button
        size="small"
        onClick={() => dispatch({ type: "ADD_TO_WATCHLIST", payload: movie })}
      >
        Add
      </Button>
    </CardActions>
  );
}
