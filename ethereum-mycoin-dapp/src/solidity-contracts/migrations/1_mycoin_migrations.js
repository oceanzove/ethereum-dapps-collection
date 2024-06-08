// eslint-disable-next-line no-undef
const MyCoin = artifacts.require("MyCoin");

module.exports = function (deployer) {
    deployer.deploy(MyCoin);
};
