import { Grid, Typography } from "@mui/material";
import React from "react";
import BasicCard from "../../components/commom/BasicCard/BasicCard";
import { portfolioItems } from "./portfolioItems";

const Portfolio = () => {
  const getContent = (title, text) => (
    <>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {text}
      </Typography>
    </>
  );

  return (
    <Grid container>
      {portfolioItems.map((item) => (
        <BasicCard
          sx={{ maxWidth: 345, paddingLeft: "20px", paddingRight: "20px" }}
          component="img"
          height={140}
          image={item.image}
          alt={item.alt}
          content={getContent(item.title, item.text)}
        />
      ))}
    </Grid>
  );
};

export default Portfolio;
