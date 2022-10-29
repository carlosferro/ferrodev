import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import React from "react";

const BasicCard = ({ component, height, image, alt, content, sx }) => {
  return (
    <Card sx={sx}>
      <CardActionArea>
        <CardMedia
          component={component}
          height={height}
          image={image}
          alt={alt}
        />
        <CardContent>{content}</CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BasicCard;
