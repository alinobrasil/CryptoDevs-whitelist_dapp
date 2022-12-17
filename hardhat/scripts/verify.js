const { ethers } = require('hardhat')


async function main() {

    const MyContract = await ethers.getContractFactory("Whitelist");
    const contract = await MyContract.attach(
        "0xbeba4da85d4a1704bf1ddfaec86b9af4197c7da0" // The deployed contract address
    );

    // Verify the contract after deploying
    await hre.run("verify:verify", {
        address: contract.address,
        constructorArguments: [30],
    });
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })