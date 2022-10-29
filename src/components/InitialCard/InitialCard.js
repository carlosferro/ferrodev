import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const InitialCard = () => {
  return (
    <Card sx={{ maxWidth: 1000 }}>
      <CardMedia
        component="img"
        alt="welcome"
        image="/welcome.png"
      />
      <CardContent >
        <Typography gutterBottom variant="h3" component="div">
          Welcome!
        </Typography>
        <Typography variant="h6">
        This is a simple website made to share some ideas and some code.
        You are welcome to contact me for any sugestion.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InitialCard;
