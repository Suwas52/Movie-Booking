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

const MovieList = ({ image, title, des }) => {
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
        <img height={"100%"} src={image} alt={title} />
      </CardMedia>
      <CardContent>
        <Typography textAlign={"center"} gutterBottom variant="h4">
          {title}
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
