//https://eth-sepolia.g.alchemy.com/v2/NbmOwtGvveDJH25_-EBppR25Rn7gZ5Re

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/NbmOwtGvveDJH25_-EBppR25Rn7gZ5Re",
      accounts: [
        "189c6036de4ba0d95f1bdce65b6e12d05e5f984197384803d705c8174da4cce0",
      ],
    },
  },
};
