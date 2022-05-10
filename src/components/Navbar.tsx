import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar style={{ padding: 0 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Link to="/">
              <Button color="inherit">Search</Button>
            </Link>
            <Link to="/watchlist">
              <Button color="inherit">Watchlist</Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
