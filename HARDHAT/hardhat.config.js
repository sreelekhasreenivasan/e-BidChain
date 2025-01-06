require("@nomicfoundation/hardhat-toolbox");
require ("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",

  networks:{
    localhost:{
      url:"http://127.0.0.1:8545/"
    },
    sepolia:{

        url:`https://eth-sepolia.g.alchemy.com/v2/${process.env.API_KEY}`,
        accounts:[process.env.PRIVATE_KEY]
      }
  }
};
