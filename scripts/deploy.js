const hre = require("hardhat");
const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const tokens = require("../tokens.json");

async function main() {
  let tab = [];
  tokens.map((token) => {
    tab.push(token.address);
  });
  const leaves = tab.map((address) => keccak256(address));
  const tree = new MerkleTree(leaves, keccak256, { sort: true });
  const root = tree.getHexRoot();
  const baseURI = "ipfs://CID/";

  const Contract = await hre.ethers.getContractFactory("TestMeta");
  const contract = await Contract.deploy(root, baseURI);

  await contract.deployed();

  console.log(
    "Contract deployed to:",
    contract.address + " - root " + root + " baseURI " + baseURI
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
