// eslint-disable-next-line no-undef
const Store = artifacts.require("Store");

module.exports = function (deployer) {
  deployer.deploy(Store);
};
