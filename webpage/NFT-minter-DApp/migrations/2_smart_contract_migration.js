const SmartContract = artifacts.require("CrpytoPresis");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "Name", "Symbol", "https://");
};
