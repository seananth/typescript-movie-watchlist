import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

type setValueProps = {
  setValue: React.Dispatch<string>;
};

export default function SearchBar({ setValue }: setValueProps) {
  return (
    <Box
      sx={{
        padding: "2em 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Explore movies</Typography>
      <Typography variant="h5">
        Find your favorite movies and plan your next movie night!
      </Typography>
      <TextField
        sx={{ marginTop: "1em" }}
        fullWidth
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search movies.."
        className=""
      />
    </Box>
  );
}
