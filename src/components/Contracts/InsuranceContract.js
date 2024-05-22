import ContractManager from "../Services/ContractManager";

class InsuranceContract {
    constructor() {
        this.contractManager = null;
        this.insuranceContract = null;
        this.accounts = null;
        this.web3 = null;
        this.init();
    }

    async init() {
        try {
            this.contractManager = await this.getContractManager();
            this.web3 = await this.getWeb3();
            this.accounts = await this.getAccounts();

            this.insuranceContract = await this.getAddressContract('InsuranceContract');

            await this.setHospitalAddress(this.accounts[0]);
            await this.setInsurerAddress(this.accounts[1]);
        } catch (error) {
            console.error(error);
        }
    }

    async getContractManager() {
        const manager = new ContractManager();
        await manager.init();
        return manager;
    }

    async getAddressContract(address) {
        try {
            return await this.contractManager.getContract(address);
        } catch (error) {
            console.error(error);
        }
    }

    async getAccounts() {
        const accounts = await this.contractManager.getWeb3().eth.getAccounts();
        if (accounts && accounts.length > 0) {
            return accounts;
        } else {
            throw new Error('No accounts found');
        }
    }

    async getWeb3() {
        try {
            return await this.contractManager.getWeb3();
        } catch (error) {
            console.log(error);
        }
    }

    async setInsurerAddress (insurerAddress) {
        try {
            await this.insuranceContract.methods.setInsurerAddress()
                .send({from: insurerAddress, gas: '200000'})
        } catch (error) {
            console.log(error);
        }
    }
    async setHospitalAddress (hospitalAddress) {
        try {
            await this.insuranceContract.methods.setHospitalAddress()
                .send({from: hospitalAddress, gas: '200000'})
        } catch (error) {
            console.log(error);
        }
    }

}

export default InsuranceContract;
