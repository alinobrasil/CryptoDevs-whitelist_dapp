const { ethers } = require("hardhat");

async function main() {
    /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so whitelistContract here is a factory for instances of our Whitelist contract.
    */
    const whitelistContract = await ethers.getContractFactory("Whitelist");

    // here we deploy the contract
    const deployedWhitelistContract = await whitelistContract.deploy(31);
    // 10 is the Maximum number of whitelisted addresses allowed

    // Wait for it to finish deploying
    await deployedWhitelistContract.deployed();

    // print the address of the deployed contract
    console.log("\nWhitelist Contract Address:", deployedWhitelistContract.address);

    // // print the address of the deployed contract
    // console.log("Verifying Contract Address on POlygonscan:", deployedWhitelistContract.address);

    // console.log("Sleeping.....");
    // // Wait for etherscan to notice that the contract has been deployed
    // await sleep(10000);

    // // Verify the contract after deploying
    // await hre.run("verify:verify", {
    //     address: deployedWhitelistContract.address,
    //     constructorArguments: [10],
    // });



}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
