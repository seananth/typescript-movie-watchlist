import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
//components
import Navbar from "../components/Navbar";
import MovieListSection from "../components/MovieListSection";
//interface
import { movieProps } from "../interfaces/interfaces";
import { Button, TextField } from "@mui/material";
//hooks
import useDebounce from "../hooks/useDebounce";

export default function Search() {
  const API_KEY = "d0051e764e60b395b912da9a68a2327b"; //should be in a .env
  const [popular, setPopular] = useState<movieProps[]>([]);
  const [popularPage, setPopularPage] = useState(1);
  const [searchResult, setSearchResult] = useState([]);
  const [debouncedValue, value, setValue] = useDebounce<string>("", 200);

  //get popular
  useEffect(() => {
    const apiPopular = async () => {
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

  //search
  useEffect(() => {
    if (debouncedValue !== "") {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${debouncedValue}`
          )
          .then((res) => {
            setSearchResult(res.data.results);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [debouncedValue]);

  return (
    <>
      <Navbar />
      <Container>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={(e) => setValue(e.target.value)}
        />

        <MovieListSection list={searchResult} title="" />

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
