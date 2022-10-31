import { Box } from "@mui/material";
import React from "react";
import InitialCard from "../../components/InitialCard/InitialCard";

const Home = () => {
  return (
    <Box display="flex" justifyContent="center" sx={{padding: 2}}>
      <InitialCard />
    </Box>
  );
};

export default Home;
