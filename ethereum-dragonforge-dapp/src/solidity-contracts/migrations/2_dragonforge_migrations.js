// eslint-disable-next-line no-undef
const DragonForge = artifacts.require("DragonForge");

module.exports = function (deployer) {
    deployer.deploy(DragonForge);
};
