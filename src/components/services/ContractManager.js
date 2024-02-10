import Web3 from 'web3';

import FileStorageContract from '../../solidity-contracts/build/contracts/FileStorage.json';
import FactorialContract from '../../solidity-contracts/build/contracts/Factorial.json';



class ContractManager {
    constructor() {
        this.web3 = null;
        this.contracts = {};
    }

    async init() {
        try {
            this.web3 = new Web3('http://localhost:7545');

            this.contracts.FileStorageContract = await this.initContract(FileStorageContract);

            this.contracts.FactorialContract = await this.initContract(FactorialContract);
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
