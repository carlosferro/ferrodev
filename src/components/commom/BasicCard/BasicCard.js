import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const BasicCard = ({ component, height, image, alt, content, sx, to, href, hrefText}) => {
  return (
    <Card sx={sx}>
      <CardActionArea component={Link} to={to}>
        <CardMedia
          component={component}
          height={height}
          image={image}
          alt={alt}
        />
        <CardContent>{content}</CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={href}>
          {hrefText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
