// eslint-disable-next-line no-undef
const CustomConverter = artifacts.require("CustomConverter");

module.exports = function (deployer) {
    deployer.deploy(CustomConverter);
};
