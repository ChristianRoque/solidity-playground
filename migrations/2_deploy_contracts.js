const CHCToken = artifacts.require("CHCToken");
const WoodToken = artifacts.require("WoodToken");
const Smit = artifacts.require("SmitCoin");
const Slick = artifacts.require("Token");
const Ham = artifacts.require("HAM");
const dBank = artifacts.require("dBank");

module.exports = async function(deployer) {
  // deploy my contract
  await deployer.deploy(CHCToken, "1000000000000000000000000");
  await deployer.deploy(WoodToken);
  await deployer.deploy(Smit);
  await deployer.deploy(Slick);
  await deployer.deploy(Ham);
  await deployer.deploy(dBank);
};
