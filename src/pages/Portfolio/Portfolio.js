import { Box, Grid, Typography } from "@mui/material";
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
    <Grid container display="flex" justifyContent="center">
      {portfolioItems.map((item) => (
        <Box sx={{ padding: 2}}>
          <BasicCard
            sx={{ maxWidth: 345 }}
            component="img"
            height={300}
            image={item.image}
            alt={item.alt}
            content={getContent(item.title, item.text)}
            to={`${item.id}`}
            href={item.href}
            hrefText={item.hrefText}
          />
        </Box>
      ))}
    </Grid>
  );
};

export default Portfolio;
