import { Box, MenuItem, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import React from "react";
import { useNavigate } from "react-router-dom";
import { navbarItems } from "./consts/navbarItems";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          {navbarItems.map((item) => (
            <MenuItem key={item.id} onClick={() => navigate(item.route)}>
              <Typography variant="h6">{item.label}</Typography>
            </MenuItem>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
