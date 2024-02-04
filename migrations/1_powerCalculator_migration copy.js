const PowerCalculator = artifacts.require("PowerCalculator");

module.exports = function (deployer) {
  deployer.deploy(PowerCalculator);
};
