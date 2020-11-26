const FolderCoinToken = artifacts.require("./FolderCoinToken.sol");
//const FolderCoinCrowdsale = artifacts.require("./FolderCoinCrowdsale.sol");
//const FolderCoinAirdrop = artifacts.require("./FolderCoinAirdrop.sol");

const name = "Folder Coin";
const symbol = "FOL";
const decimals = 18;
const initialSupply = 200000000;

// TODO: Change this parameters in mainnet deployment
const rate = 21935; // 1 ETH = 21,935.9375 FOLDER_COIN token
const totalSaleCap = 2279 * Math.pow(10, 18); // 2,279.36463 ETH
const wallet = process.env.FUND_COLLECTOR_ADDRESS;

/************* FOLDER_COIN Token deployed information ***************/

// Mainnet - Ethereum
// @see https://etherscan.io/token/0x???
const FOLDER_COIN_TOKEN_ADDRESS_MAINNET =
  "0x4a7560278f0b5e24f22310c27ef39feaa6d9c382";

// Ropsten - Ethereum
// @see https://rinkeby.etherscan.io/token/0xd97243165b693c3173be975fc0bc1590e6acee15
const FOLDER_COIN_TOKEN_ADDRESS_RINKEBY =
  "0xfc0975bc1596acee15d97243b693c3173b165e0e";

// // Mainnet - Klaytn
// // @see https://baobab.klaytnscope.com/account/0x
// const FOLDER_COIN_TOKEN_ADDRESS_CYPRESS = "";

// // Baobab - Klaytn
// // @see https://baobab.klaytnscope.com/account/0xe0e047204b6cf09ca49f8b318053cc81c996bf53
// const FOLDER_COIN_TOKEN_ADDRESS_BAOBAB =
//   "0xe0e047204b6cf09ca49f18053cc81c996bf538b3";

// Deployer
const TokenContractDeployer = (deployer, network) => {
  if (
    network === "ropsten" ||
    network === "baobab" || // TestNet
    network === "mainnet" ||
    network === "cypress"
  ) {
    // MainNet
    deployer
      .deploy(FolderCoinToken, name, symbol, decimals, initialSupply)
      .then((_) =>
        console.log(
          "FOLDER_COIN Token contract has been deployed successfully. FolderCoinToken.address =" +
          FolderCoinToken.address
        )
      );
  } else {
    throw new Error("Unknown network!");
  }
};

/*************************************************************/

/************* FOLDER_COIN Crowdsale deployed information ***************/

// Mainnet - Ethereum
// @see https://etherscan.io/0x
// const FOLDER_COIN_CROWDSALE_ADDRESS = '';

// Ropsten - Ethereum
// @see https://rinkeby.etherscan.io/0xb0eb24ce9b029a9e771a7878c7983e1d06f5895d
// const FOLDER_COIN_CROWDSALE_ADDRESS = '0xe9b029a9e771a7878c7983e1d06f5895db0eb24c';

// Deployer
// const SaleContractDeployer = (deployer, network) => {
//   deployer
//     .deploy(
//       FolderCoinCrowdsale,
//       rate,
//       wallet,
//       getTokenAddress(network),
//       totalSaleCap
//     )
//     .then((_) =>
//       console.log(
//         `FOLDER_COIN Crowdsale contract has been deployed successfully on ${network}.`
//       )
//     );
// };

function getTokenAddress(network) {
  switch (network) {
    case "mainnet":
      return FOLDER_COIN_TOKEN_ADDRESS_MAINNET;
    case "ropsten":
      return FOLDER_COIN_TOKEN_ADDRESS_ROPSTEN;
    case "baobab":
      return FOLDER_COIN_TOKEN_ADDRESS_BAOBAB;
    case "cypress":
      return FOLDER_COIN_TOKEN_ADDRESS_CYPRESS;
    default:
      throw new Error("Unknown network!");
  }
}

/************* FOLDER_COIN Airdrop deployed information ***************/

// Baobab - Klaytn
// const FOLDER_COIN_AIRDROP_ADDRESS = '0x84b148d389a94bf97abba8bf04bc4b0f33355418';

// Deployer
// const AirdropContractDeployer = (deployer, network) => {
//   deployer
//     .deploy(FolderCoinAirdrop, getTokenAddress(network))
//     .then((_) =>
//       console.log(
//         `FOLDER_COIN Airdrop contract has been deployed successfully on ${network}.`
//       )
//     );
// };

/*****************************************************************/

module.exports = (deployer, network) => {
  /**
   * Token contract deploy.
   */
  TokenContractDeployer(deployer, network);

  /**
   * Sale contract deploy.
   */
  // SaleContractDeployer(deployer, network);

  /**
   * Sale contract deploy.
   */
  // AirdropContractDeployer(deployer, network);
};
