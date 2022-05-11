import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import { movieCardProps } from "../interfaces/interfaces";

export default function MovieCardControls({ movie }: movieCardProps) {
  const { state, dispatch } = useContext(GlobalContext);

  //check if already on watchlist
  let alreadyOnWatchlist = state.watchlist.find(
    (watchlistItem) => watchlistItem.id === movie.id
  );
  const watchlistSwitch = alreadyOnWatchlist ? true : false;

  //check if already on favorites list
  let alreadyOnFavorites = state.favorites.find(
    (favoritesItem) => favoritesItem.id === movie.id
  );
  const favoritesSwitch = alreadyOnFavorites ? true : false;

  return (
    <CardActions>
      {favoritesSwitch ? (
        <Button
          size="small"
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_FAVORITES", payload: movie.id })
          }
        >
          remove favorite
        </Button>
      ) : (
        <Button
          size="small"
          onClick={() => dispatch({ type: "ADD_TO_FAVORITES", payload: movie })}
        >
          favorite
        </Button>
      )}
      {watchlistSwitch ? (
        <Button
          size="small"
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: movie.id })
          }
        >
          Remove from Watchlist
        </Button>
      ) : (
        <Button
          size="small"
          onClick={() => dispatch({ type: "ADD_TO_WATCHLIST", payload: movie })}
        >
          Add to watchlist
        </Button>
      )}
    </CardActions>
  );
}
