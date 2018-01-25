require("isomorphic-fetch");
require("isomorphic-form-data");
const fs = require("fs");
const readFileSync = fs.readFileSync;

const broadcastTransaction = async rawTx => {
  const broadcastUrl = "https://api.etherscan.io/api";
  const data = new FormData();
  data.append("module", "proxy");
  data.append("action", "eth_sendRawTransaction");
  data.append("hex", rawTx);
  data.append("apikey", "3DQFQQZ51G4M18SW8RDKHIMERD79GYTVEA"); // please us
  let resp = await fetch(broadcastUrl, {
    method: "post",
    body: data
  });
  resp = await resp.json();
  console.log("broadcast Tx:", resp);
  return resp;
};

(async () => {
  const rawTxBuffer = readFileSync("transaction.txt");
  console.log('TX', rawTxBuffer.toString());
  //  await broadcastTransaction(rawTx.toString());

  await broadcastTransaction(rawTxBuffer.toString());
})();
