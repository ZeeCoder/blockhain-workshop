## Questions

* How do tests work? truffle (unit testing toolkit/ deployment of contracts, migrations, etc)
* which node executes the contract methods? How does concensus work to validate contract execution.
* what is "sol" (Solidity)
* etherscan to check if the compiled code is actually based on the source owners claim to be
* events leave logs behind that can be queried, and you can listen to them using
  websockets (the latter being quite unreliable unfortunately)

## Contract code examples

* Sending funds (implementing a wallet with deposit, getBalance, withdraw)
* Approver that approves withdrawals
* Implementing a "token" contract, which basically acts as an alt-coin inside
  the contract
* "logic" contract, which operates on a "storage" contract
* oracle to get a random number, using events

## Others

* https://remix.ethereum.org/#optimize=false&version=soljson-v0.4.19+commit.c4cbbb05.js
* cryptozombies.io
* The Ethernaut
* duckduckgo => `qr! <someval>` to generate a QR code
* https://gist.github.com/aae928de175d7c02c15a0e75c70c31d5
