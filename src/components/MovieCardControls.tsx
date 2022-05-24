import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { movieCardProps } from "../interfaces/interfaces";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const MovieCardControls = ({ movie }: movieCardProps) => {
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
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_FAVORITES", payload: movie.id })
          }
        >
          <HeartBrokenIcon />
        </Button>
      ) : (
        <Button
          size="small"
          onClick={() => dispatch({ type: "ADD_TO_FAVORITES", payload: movie })}
        >
          <FavoriteIcon />
        </Button>
      )}
      {watchlistSwitch ? (
        <Button
          size="small"
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: movie.id })
          }
        >
          <DeleteIcon />
        </Button>
      ) : (
        <Button
          size="small"
          onClick={() => dispatch({ type: "ADD_TO_WATCHLIST", payload: movie })}
        >
          <AddIcon />
        </Button>
      )}
    </CardActions>
  );
};

export default MovieCardControls;
