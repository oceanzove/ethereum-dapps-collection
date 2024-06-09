// eslint-disable-next-line no-undef
const Donation = artifacts.require("Donation");

module.exports = function (deployer) {
    deployer.deploy(Donation);
};
