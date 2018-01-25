const Accounts = require("web3-eth-accounts");
const accounts = new Accounts();
const account = accounts.create();

console.log(account.privateKey);
