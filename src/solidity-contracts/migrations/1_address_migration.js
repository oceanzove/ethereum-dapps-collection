// eslint-disable-next-line no-undef
const AddressContract = artifacts.require("AddressContract");

module.exports = function (deployer) {
    deployer.deploy(AddressContract);
};
