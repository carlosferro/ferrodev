import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PriceTable from "../PriceTable/PriceTable";

const OrderBook = ({title}) => {
  const head = ["ask", "bid"];
  const rows = [
    [1, 2],
    [3, 4],
  ];
  return (
    <Card >
      <CardContent>
        <Typography align="center" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Box container display="flex" justifyContent="center">
          <PriceTable head={head} rows={rows}></PriceTable>
          <PriceTable head={head} rows={rows}></PriceTable>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderBook;
