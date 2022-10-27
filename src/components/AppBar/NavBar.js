import { Box, MenuItem, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import React from "react";
import { navbarItems } from "./consts/navbarItems";

const NavBar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          {navbarItems.map((item) => (
            <MenuItem key={item.id}>
              <Typography variant="h6">
                {item.label}
              </Typography>
            </MenuItem>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
