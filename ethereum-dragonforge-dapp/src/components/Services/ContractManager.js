import Web3 from 'web3';

import DragonFarmContract from '../../solidity-contracts/build/contracts/DragonFarm.json';
import DragonForgeContract from '../../solidity-contracts/build/contracts/DragonForge.json';


class ContractManager {
    constructor() {
        this.web3 = null;
        this.contracts = {};
    }

    async init() {
        try {
            this.web3 = new Web3('http://localhost:8545');

            this.contracts.DragonFarmContract = await this.initContract(DragonFarmContract);
            this.contracts.DragonForgeContract = await this.initContract(DragonForgeContract);

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
