import React, { useEffect, useState } from "react";
import {
  AppBar,
  Autocomplete,
  Box,
  Tab,
  Tabs,
  TextField,
  Toolbar,
} from "@mui/material";
import Logo from "@mui/icons-material/MovieFilter";
import { getAllMovies } from "../all-api/api-helper";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.allMovies))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#2b2d42" }}>
      <Toolbar>
        <Box width={"20%"}>
          <Link to="/">
            <Logo />
          </Link>
        </Box>
        <Box width="30%" margin={"auto"} />
        <Autocomplete
          freeSolo
          sx={{
            borderRadius: 10,
            width: "50%",
            margin: "auto",
          }}
          options={movies?.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              sx={{ input: { color: "white" } }}
              {...params}
              placeholder="Movie"
            />
          )}
        />
        <Box />
        <Box display={"flex"} marginLeft={"50px"}>
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/movies" label="Movies" />
            <Tab LinkComponent={Link} to="/admin" label="Admin" />
            <Tab LinkComponent={Link} to="/auth" label="Auth" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
