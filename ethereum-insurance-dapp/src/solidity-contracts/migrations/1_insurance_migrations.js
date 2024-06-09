// eslint-disable-next-line no-undef
const Insurance = artifacts.require("Insurance");

module.exports = function (deployer) {
    deployer.deploy(Insurance);
};
