import Web3 from 'web3';

import FileStorageContract from '../../solidity-contracts/build/contracts/FileStorage.json';
import FactorialContract from '../../solidity-contracts/build/contracts/Factorial.json';
import ConverterContract from '../../solidity-contracts/build/contracts/Converter.json';
import ConverterAdvanceContract from '../../solidity-contracts/build/contracts/ConverterAdvance.json';
import CustomConverterContract from '../../solidity-contracts/build/contracts/CustomConverter.json';
import CalculatorContract from '../../solidity-contracts/build/contracts/Calculator.json';
import BitwiseCalculatorContract from '../../solidity-contracts/build/contracts/BitwiseCalculator.json';


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

            this.contracts.ConverterContract = await this.initContract(ConverterContract);
            this.contracts.CustomConverterContract = await this.initContract(CustomConverterContract);
            this.contracts.ConverterAdvanceContract = await this.initContract(ConverterAdvanceContract);

            this.contracts.CalculatorContract = await this.initContract(CalculatorContract);
            this.contracts.BitwiseCalculatorContract = await this.initContract(BitwiseCalculatorContract)


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
