import React from "react";
import { render, screen } from "@testing-library/react";
import MovieCard from "../components/MovieCard";

const mockMovie = {
  id: 7,
  title: "The Brave Little Toaster",
  release_date: "1987",
  vote_average: 7.3,
  overview:
    "A group of dated appliances embark on a journey to the city to find their master after being abandoned in a cabin in the woods.",
};

test("renders learn react link", () => {
  render(<MovieCard movie={mockMovie} />);
  const elementTitle = screen.getByText("The Brave Little Toaster");
  expect(elementTitle).toBeInTheDocument();
});
