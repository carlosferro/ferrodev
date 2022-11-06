import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import PriceTable from "../PriceTable/PriceTable";

const OrderBook = ({ title, asks, bids, sx }) => {
  return (
    <Card sx={sx}>
      <CardContent>
        <Typography
          align="center"
          sx={{ fontSize: 20 }}
          color="text.primary"
          gutterBottom
        >
          {title}
        </Typography>
        <Box container display="flex" justifyContent="center">
          <PriceTable
            side="Bid"
            head={["Volume", "Price"]}
            rows={bids}
          ></PriceTable>
          <PriceTable
            side="Ask"
            head={["Price", "Volume"]}
            rows={asks}
          ></PriceTable>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderBook;
