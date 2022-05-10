import React, { useState } from "react";
import Container from "@mui/material/Container";
//components
import Navbar from "../components/Navbar";
import MovieListSection from "../components/MovieListSection";
//interface
import { movieProps } from "../interfaces/interfaces";

export default function Search() {
  const API_KEY = "d0051e764e60b395b912da9a68a2327b"; //should be in a .env

  const list: movieProps[] = [
    {
      id: 1,
      title: "title",
      release_date: "2022",
      vote_average: "7",
      overview:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    },
    {
      id: 2,
      title: "title",
      release_date: "2022",
      vote_average: "7",
      overview:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    },
    {
      id: 3,
      title: "title",
      release_date: "2022",
      vote_average: "7",
      overview:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    },
    {
      id: 4,
      title: "title",
      release_date: "2022",
      vote_average: "7",
      overview:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <Container>
        <MovieListSection list={list} title="Popular" />
      </Container>
    </>
  );
}
