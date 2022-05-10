import React from "react";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function MovieCardControls() {
  return (
    <CardActions>
      <Button size="small">fav</Button>
      <Button size="small">Add</Button>
    </CardActions>
  );
}
