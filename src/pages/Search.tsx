import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
//components
import Navbar from "../components/Navbar";
import MovieListSection from "../components/MovieListSection";
//interface
import { movieProps } from "../interfaces/interfaces";
import { Button } from "@mui/material";

export default function Search() {
  const [popular, setPopular] = useState<movieProps[]>([]);
  const [popularPage, setPopularPage] = useState(1);

  useEffect(() => {
    const apiPopular = async () => {
      const API_KEY = "d0051e764e60b395b912da9a68a2327b"; //should be in a .env
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${popularPage}`
          )
          .then((res) => {
            setPopular(res.data.results);
          });
      } catch (error) {
        console.log(error);
      }
    };
    apiPopular();
  }, [popularPage]);

  return (
    <>
      <Navbar />
      <Container>
        <Button
          disabled={popularPage === 1}
          onClick={() => setPopularPage((prev) => prev - 1)}
        >
          Prev page
        </Button>
        <Button onClick={() => setPopularPage((prev) => prev + 1)}>
          Next page
        </Button>
        <MovieListSection list={popular} title="Popular" />
      </Container>
    </>
  );
}
