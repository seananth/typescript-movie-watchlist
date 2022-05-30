import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieCard from "../components/MovieCard";
import { GlobalProvider } from "../context/GlobalState";

const mockMovie = {
  id: 7,
  title: "The Brave Little Toaster",
  release_date: "1987",
  vote_average: 7.3,
  overview:
    "A group of dated appliances embark on a journey to the city to find their master after being abandoned in a cabin in the woods.",
};

test("Button appearence change on add to favorites", () => {
  render(
    <GlobalProvider>
      <MovieCard movie={mockMovie} />
    </GlobalProvider>
  );
  //expect add to favoirtes button
  expect(screen.getByTestId("add-favorite")).toBeInTheDocument();
  //click button
  fireEvent.click(screen.getByTestId("add-favorite"));
  //expect remove from favorites button
  expect(screen.getByTestId("remove-favorite")).toBeInTheDocument();
});

test("Button appearence change on add to watchlist", () => {
  render(
    <GlobalProvider>
      <MovieCard movie={mockMovie} />
    </GlobalProvider>
  );
  //expect add to watchlist button
  expect(screen.getByTestId("add-watchlist")).toBeInTheDocument();
  //click button
  fireEvent.click(screen.getByTestId("add-watchlist"));
  //expect remove from watchlist button
  expect(screen.getByTestId("remove-watchlist")).toBeInTheDocument();
});
