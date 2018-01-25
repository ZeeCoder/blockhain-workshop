const fs = require("fs");
const readFileSync = fs.readFileSync;
const Accounts = require("web3-eth-accounts");
const accounts = new Accounts();
const key = readFileSync("private-key.txt");
const account = accounts.privateKeyToAccount(key);

console.log(account.address);
