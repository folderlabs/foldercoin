# Update issue

## 2020-11-20

```
solidity version : ^0.6.0;
openzeppelin-contracts code version changed
     https://github.com/OpenZeppelin/openzeppelin-contracts/tree/release-v3.3/contracts/token/ERC20
caution : It can only be built on remix.ethereum.org.
     use FolderCoinToken.sol
```


# folder-coin-contracts

nvm use v9.5.0

Smart-contracts for folder coin platform

## Deployment - Ethereum

1. First uncomment the deployer function corresponds to the contract you want to deploy and comment out all the others in `migrations/2_folder-coin-token.js` file.
2. If the project folder includes `build` folder, first delete it
3. Compile the corresponding contract as follows;
   `truffle compile`
4. Set mnemonic words for deployer in your command line as follows;
   `export MNEMONICS="<mnemonic_words>"`
5. And set your infura project secret key as follows;
   `export INFURA_API_KEY="<infura_project_secret>"`
6. Also set fund collector address as follows;
   `export FUND_COLLECTOR_ADDRESS="<fund_collector_address>"`
7. Finally deploy the contract on the network you desire
   `NETWORK=<network_name> npm run deploy`
   NETWORK=ropsten npm run deploy

   > FolderCoinToken.address =0xCF5E064f66ADAfb31ef83aA5352b9CA57DEf73b1

   NETWORK=mainnet npm run deploy

## Test

- In order to run the whole tests
  `truffle test`
- In order to run only specific test file

- test : https://remix.ethereum.org/

## folder coin token address

> rospten : 
> mainnet :  https://etherscan.io/token/0xA8580F3363684d76055bdC6660CaeFe8709744e1
