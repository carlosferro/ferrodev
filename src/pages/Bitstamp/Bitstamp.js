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
              data.bids.slice(0, 10),
              data.asks.slice(0, 10),
            ];
            return JSON.parse(JSON.stringify(priceLevels));
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

  const handleContract = (contract, activate) => {
    const newState = contracts.map((item) => {
      return item.name === contract ? { ...item, active: activate } : item;
    });
    setContracts(newState);
    activate
      ? ws.send(getSubscribeString(contract))
      : ws.send(getUnsubscribeString(contract));
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
            {contracts.map((contract) => (
              <OrderBook title={contract.name}></OrderBook>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Bitstamp;
