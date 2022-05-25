import React, { useState, useEffect } from "react";
//components
import Navbar from "../components/Navbar";
import MovieListSection from "../components/MovieListSection";
import Container from "@mui/material/Container";
import SearchBar from "../components/SearchBar";
import PopularMoviesNav from "../components/PopularMoviesNav";
//interface
import { movieProps } from "../interfaces/interfaces";
//hooks
import useDebounce from "../hooks/useDebounce";
import useApi from "../hooks/useApi";

const Search = () => {
  const API_KEY = "d0051e764e60b395b912da9a68a2327b"; //should be in a .env
  const [popular, setPopular] = useState<movieProps[]>([]);
  const [popularPage, setPopularPage] = useState(1);
  const [searchResult, setSearchResult] = useState([]);
  const [debouncedValue, value, setValue] = useDebounce<string>("", 200);
  const { status, data } = useApi(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${popularPage}`
  );
  const { status: searchStatus, data: searchData } = useApi(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${debouncedValue}`,
    debouncedValue
  );

  useEffect(() => {
    if (status === "fetched") {
      setPopular(data);
    }
  }, [data]);

  useEffect(() => {
    if (searchStatus === "fetched") {
      setSearchResult(searchData);
    }
  }, [searchData]);

  return (
    <>
      <Navbar />
      <Container>
        <SearchBar setValue={setValue} />
        <MovieListSection list={searchResult} title="" />
        <MovieListSection list={popular} title="Popular" />
        <PopularMoviesNav
          popularPage={popularPage}
          setPopularPage={setPopularPage}
        />
      </Container>
    </>
  );
};

export default Search;
