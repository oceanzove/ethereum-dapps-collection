// eslint-disable-next-line no-undef
const Note = artifacts.require("Note");

module.exports = function (deployer) {
    deployer.deploy(Note);
};
