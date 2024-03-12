import Web3 from 'web3';

import OwnerContract from '../../solidity-contracts/build/contracts/Owner.json';


class ContractManager {
    constructor() {
        this.web3 = null;
        this.contracts = {};
    }

    async init() {
        try {
            this.web3 = new Web3('http://localhost:7545');

            this.contracts.OwnerContract = await this.initContract(OwnerContract);

        } catch (error) {
            console.error(error);
        }
    }

    async initContract(contractJson) {
        const networkId = await this.web3.eth.net.getId();
        const deployedNetwork = contractJson.networks[networkId];
        return new this.web3.eth.Contract(
            contractJson.abi,
            deployedNetwork && deployedNetwork.address,
        );
    }

    getContract(contractName) {
        return this.contracts[contractName];
    }

    getWeb3() {
        return this.web3;
    }
}

export default ContractManager;