require("isomorphic-fetch");

const publicKey = "0xa77f7a2d39cff61a41d2568fd8700556151fe393";

const getBalance = async address => {
  const balanceUrl = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest`;
  let resp = await fetch(balanceUrl);
  resp = await resp.json();
  console.log(resp);
  return Number(resp["result"] || 0);
};

(async () => {
  const balance = await getBalance(publicKey);
  console.log(balance);
})();
