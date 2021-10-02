const SmartContract = artifacts.require("CryptoPresis");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "Name", "Symbol", "https://");
};
