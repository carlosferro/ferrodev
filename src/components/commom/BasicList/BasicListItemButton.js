import { ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";

const BasicListItemButton = ({ contract, handleContract}) => {
  // const [selected, setSelected] = useState(contract.active);

  const select = () => {
    // selected ? console.log('1true') : console.log('1false')
    // setSelected(selected ? false : true);
    // selected ? console.log('1true') : console.log('1false')
    handleContract(contract.name)
  };
  return (
    <ListItemButton name={contract.name} onClick={select} selected={contract.active}>
      <ListItemText primary={contract.name} />
    </ListItemButton>
  );
};

export default BasicListItemButton;
