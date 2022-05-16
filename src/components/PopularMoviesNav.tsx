import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

type PopularMoviesNav = {
  popularPage: number;
  setPopularPage: React.Dispatch<React.SetStateAction<number>>;
}

const PopularMoviesNav = ({
  popularPage,
  setPopularPage,
}: PopularMoviesNav) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        margin: "2em 0",
      }}
    >
      <Button
        variant="contained"
        disabled={popularPage === 1}
        onClick={() => setPopularPage((prev) => prev - 1)}
      >
        Prev page
      </Button>
      <Button
        variant="contained"
        onClick={() => setPopularPage((prev) => prev + 1)}
      >
        Next page
      </Button>
    </Box>
  );
};

export default PopularMoviesNav;
