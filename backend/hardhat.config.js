const { vars } = require("hardhat/config");
const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");

module.exports = {
  solidity: "0.8.27",
  networks: {
    holesky:{
      url: `https://eth-holesky.g.alchemy.com/v2/brt4Zx_ETH6rNPHTs1p2wE4ccmMoXS_7`,
      accounts: [ae4d0a57af3917c9dc28d5b0a89dc3f4bf99cefdaaa61f666a3f668688c509c7
      ]
    }
  },
};
require("@nomicfoundation/hardhat-toolbox");
