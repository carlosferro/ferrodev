import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import BasicList from "../../components/commom/BasicList/BasicList";
import OrderBook from "../../components/OrderBook/OrderBook";
import { contractItems } from "./ contractsItems";

const Bitstamp = () => {
  const [priceLevels, setPriceLevels] = useState({});
  const [contracts, setContracts] = useState(contractItems);
  const [ws, setWs] = useState();

  useEffect(() => {
    initWs();
  }, []);

  function initWs() {
    let newWs = new WebSocket("wss://ws.bitstamp.net");

    newWs.onopen = function () {
      contracts.map((contract) =>
        contract.active ? newWs.send(getSubscribeString(contract.name)) : null
      );
    };

    newWs.onmessage = function (evt) {
      let response = JSON.parse(evt.data);
      switch (response.event) {
        case "data": {
          let data = response.data;
          let contract = response.channel.substring(11);

          setPriceLevels((priceLevels) => {
            priceLevels[contract] = [
              data.bids.slice(0, 10).map((x) => x.slice().reverse()),
              data.asks.slice(0, 10),
            ];
            return JSON.parse(JSON.stringify(priceLevels));
            // return priceLevels;
          });
          break;
        }
        case "bts:request_reconnect": {
          initWs();
          break;
        }
        default:
          break;
      }
    };

    newWs.onerror = function () {};

    newWs.onclose = function () {
      console.log("Websocket connection closed");
      initWs();
    };

    setWs(newWs);
  }

  function getSubscribeString(pContract) {
    return JSON.stringify({
      event: "bts:subscribe",
      data: {
        channel: "order_book_" + pContract,
      },
    });
  }

  function getUnsubscribeString(pContract) {
    return JSON.stringify({
      event: "bts:unsubscribe",
      data: {
        channel: "order_book_" + pContract,
      },
    });
  }

  const handleContract = (contract) => {
    const newState = contracts.map((item) => {
      if (item.name === contract) {
        item.active
          ? ws.send(getUnsubscribeString(item.name))
          : ws.send(getSubscribeString(item.name));
        return { ...item, active: item.active ? false : true };
      } else {
        return item;
      }
    });
    setContracts(newState);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid sx={{ overflowY: "auto", maxHeight: "90vh" }} item xs="auto">
          <BasicList
            contracts={contracts}
            handleContract={handleContract}
          ></BasicList>
        </Grid>
        <Grid item xs>
          <Grid container>
            {contracts.map((contract) =>
              contract.active ? (
                <OrderBook
                  sx={{ minWidth: "450px" }}
                  title={contract.name.toUpperCase()}
                  asks={
                    priceLevels[contract.name]
                      ? priceLevels[contract.name][1]
                      : []
                  }
                  bids={
                    priceLevels[contract.name]
                      ? priceLevels[contract.name][0]
                      : []
                  }
                ></OrderBook>
              ) : null
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Bitstamp;
