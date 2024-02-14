// eslint-disable-next-line no-undef
const Converter = artifacts.require("Converter");

module.exports = function (deployer) {
    deployer.deploy(Converter);
};
