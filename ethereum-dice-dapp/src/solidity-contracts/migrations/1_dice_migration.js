// eslint-disable-next-line no-undef
const Dice = artifacts.require("Dice");

module.exports = function (deployer) {
    deployer.deploy(Dice);
};