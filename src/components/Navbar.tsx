import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const linkStyle = {
  textDecoration: "none",
  color: "White",
};

const Navbar = () => {
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MovieWatch
          </Typography>
          <Link to="/" style={linkStyle}>
            <Button color="inherit">Search</Button>
          </Link>
          <Link to="/watchlist" style={linkStyle}>
            <Button color="inherit">Watchlist</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Navbar;
