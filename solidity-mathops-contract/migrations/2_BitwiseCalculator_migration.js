const BitwiseCalculator = artifacts.require("BitwiseCalculator");

module.exports = function (deployer) {
  deployer.deploy(BitwiseCalculator);
};
