// eslint-disable-next-line no-undef
const NewNote = artifacts.require("NewNote");

module.exports = function (deployer) {
    deployer.deploy(NewNote);
};
