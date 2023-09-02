import { Box, Typography } from "@mui/material";
import React from "react";
import MovieList from "./movies/MovieList";

const HomePage = () => {
  return (
    <Box width={"100%"} height={"100%"}>
      <Box width={"80%"} height={"40vh"} margin={"auto"} marginTop={2}>
        <img
          height={"100%"}
          width={"100%"}
          src="https://upload.wikimedia.org/wikipedia/en/7/71/Bro_Teaser.png"
          alt=""
        />
      </Box>
      <Box width={"80%"} margin={"auto"}>
        <Box>
          <Typography variant="h4" textAlign="center" margin={2}>
            Latest Movies
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" flexWrap={"wrap"}>
          <MovieList />
          <MovieList />
          <MovieList />
          <MovieList />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
