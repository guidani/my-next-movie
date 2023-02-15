import { Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  InputAdornment,
  Toolbar,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "primary.dark" }}>
      <AppBar component="nav" position="static">
        <Toolbar>
          <Box flexGrow="1">
            <Typography component="h6" fontSize="2rem">
              My Next Movie
            </Typography>
          </Box>
          <Box
            component="form"
            sx={{ width: "25ch" }}
            display="flex"
            alignItems="center"
          >
            <TextField
              id="search-field"
              variant="outlined"
              placeholder="Buscar filme"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton aria-label="search" color="secondary">
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
