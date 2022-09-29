// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
require("dotenv").config({ path: ".env" });
const { PHIT_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
	const phitNFTContract = PHIT_NFT_CONTRACT_ADDRESS;
	const phitNFTTokenContract = await ethers.getContractFactory("PhitToken");
	const deployedPhitNFTTokenContract = await phitNFTTokenContract.deploy(phitNFTContract);

	console.log("PhitToken Contract Address:", deployedPhitNFTTokenContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
