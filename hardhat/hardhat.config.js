require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" })
require("@nomiclabs/hardhat-etherscan");

const ALCHEMY_URL = process.env.ALCHEMY_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY
const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.9",
    networks: {
        goerli: {
            url: ALCHEMY_URL,
            accounts: [PRIVATE_KEY],
        },
        mumbai: {
            url: process.env.POLYGON_MUMBAI_URL,
            accounts: [PRIVATE_KEY]
        }
    },
    etherscan: {
        apiKey: {
            polygonMumbai: POLYGONSCAN_KEY,
        }
    }
}
