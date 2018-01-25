const createTx = async ({ recipient, account, value }) => {
  const txData = {
    value: value,
    to: recipient,
    gas: 21000,
    gasPrice: 5000000000, // 5 gwei
    from: account.address,
    nonce: 42
  };
  const tx = await account.signTransaction(txData);
  const txRaw = tx.rawTransaction;
  console.log("TX RAW", txRaw);
  return txRaw;
};

(async () => {
  const fs = require("fs");
  const readFileSync = fs.readFileSync;
  const Accounts = require("web3-eth-accounts");
  const accounts = new Accounts("https://kovan.infura.io");
  const key = readFileSync("private-key.txt");
  // const key = "0xA77f7A2D39cfF61A41D2568Fd8700556151fe393";

  const account = accounts.privateKeyToAccount(key);
  createTx({
    account: account,
    recipient: "0xD9dDF72Ef671261Cb2266B9D924c5980C5186699",
    value: 100000000000000 // 100 szabo
  });
})();
