// eslint-disable-next-line no-undef
const Factorial = artifacts.require("Factorial");

module.exports = function (deployer) {
    deployer.deploy(Factorial);
};
