// eslint-disable-next-line no-undef
const Voter = artifacts.require("Voter");

module.exports = function (deployer) {
    deployer.deploy(Voter);
};