import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
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

test("Button appearence on add to favorites", async () => {
  render(
    <GlobalProvider>
      <MovieCard movie={mockMovie} />
    </GlobalProvider>
  );

  expect(screen.getByTestId("add-favorite")).toBeInTheDocument();

  fireEvent.click(screen.getByTestId("add-favorite"));

  await waitFor(() => {
    expect(screen.getByTestId("remove-favorite")).toBeInTheDocument();
  });
});
