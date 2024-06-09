// eslint-disable-next-line no-undef
const ConverterAdvance = artifacts.require("ConverterAdvance");

module.exports = function (deployer) {
    deployer.deploy(ConverterAdvance);
};
