import { List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BasicListItemButton from "./BasicListItemButton";

const BasicList = ({ contracts, handleContract }) => {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List sx={{ maxHeight: "100%", overflow: "auto" }}>
        {contracts.map((contract) => (
          <ListItem disablePadding>
            <BasicListItemButton
              handleContract={handleContract}
              contract={contract}
            ></BasicListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BasicList;
