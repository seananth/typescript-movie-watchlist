import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Container from "@mui/material/Container";

//components
import Navbar from "../components/Navbar";
import MovieListSection from "../components/MovieListSection";

const Watchlist = () => {
  const { state } = useContext(GlobalContext);
  return (
    <>
      <Navbar />
      <Container>
        <MovieListSection list={state.watchlist} title="Watchlist" />
        <div style={{ margin: "2em 0" }} />
        <MovieListSection list={state.favorites} title="Favorites" />
      </Container>
    </>
  );
};

export default Watchlist;
