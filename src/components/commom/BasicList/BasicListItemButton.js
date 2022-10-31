import { ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";

const BasicListItemButton = ({ contract }) => {
  const [selected, setSelected] = useState(false);

  const select = () => {
    setSelected(selected ? false : true);
  };
  return (
    <ListItemButton name={contract} onClick={select} selected={selected}>
      <ListItemText primary={contract} />
    </ListItemButton>
  );
};

export default BasicListItemButton;
