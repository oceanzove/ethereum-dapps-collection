// eslint-disable-next-line no-undef
const DragonFarm = artifacts.require("DragonFarm");

module.exports = function (deployer) {
    deployer.deploy(DragonFarm);
};
