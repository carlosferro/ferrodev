import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/AppBar/NavBar";

function App() {
  return (
    <Box container>
      <Outlet />
    </Box>
  );
}

export default App;
