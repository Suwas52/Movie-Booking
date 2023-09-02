import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const MovieList = () => {
  return (
    <Card
      sx={{
        width: 250,
        height: 320,
        margin: 1,
        ":hover": { boxShadow: "10px 10px 20px #ccc" },
      }}
    >
      <CardMedia sx={{ height: 200 }}>
        <img
          height={"100%"}
          src="https://imgs.search.brave.com/hZfFJj4C-sNLXUS-mFHxyv6HIPBCJYbEvIPxhBt5T6A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNDA5/MTYzLmpwZw"
          alt=""
        />
      </CardMedia>
      <CardContent>
        <Typography textAlign={"center"} gutterBottom variant="h4">
          Lizard
        </Typography>
      </CardContent>
      <Box display="flex" justifyContent="space-between">
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </Box>
    </Card>
  );
};

export default MovieList;
