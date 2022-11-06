import { ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";

const BasicListItemButton = ({ contract, handleContract}) => {

  const select = () => {
    handleContract(contract.name)
  };
  
  return (
    <ListItemButton name={contract.name} onClick={select} selected={contract.active}>
      <ListItemText primary={contract.name} />
    </ListItemButton>
  );
};

export default BasicListItemButton;
