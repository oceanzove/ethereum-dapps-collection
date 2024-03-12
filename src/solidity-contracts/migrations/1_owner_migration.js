// eslint-disable-next-line no-undef
const Owner = artifacts.require("Owner");

module.exports = function (deployer) {
    deployer.deploy(Owner);
};