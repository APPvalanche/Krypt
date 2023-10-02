//https://eth-goerli.g.alchemy.com/v2/FhggSrb8hMvfRpDSWliwipCav8nayaI5

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-goerli.g.alchemy.com/v2/FhggSrb8hMvfRpDSWliwipCav8nayaI5",
      accounts: [
        "189c6036de4ba0d95f1bdce65b6e12d05e5f984197384803d705c8174da4cce0",
      ],
    },
  },
};
