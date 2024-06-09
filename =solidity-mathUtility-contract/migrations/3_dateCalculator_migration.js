const DateCalculator = artifacts.require("DateCalculator");

module.exports = function (deployer) {
  deployer.deploy(DateCalculator);
};
