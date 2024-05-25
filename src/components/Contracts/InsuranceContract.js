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

    async setInsurerAddress () {
        try {
            await this.insuranceContract.methods.setInsurerAddress()
                .send({from: this.accounts[0], gas: '200000'})
        } catch (error) {
            console.log(error);
        }
    }
    async setHospitalAddress () {
        try {
            await this.insuranceContract.methods.setHospitalAddress()
                .send({from: this.accounts[1], gas: '200000'})
        } catch (error) {
            console.log(error);
        }
    }

    async getLastId () {
        try {
            return await this.insuranceContract.methods.getLastId()
                .call({from: this.accounts[2], gas: '200000'})
        } catch (error) {
            console.log(error);
        }
    }

    async newRecord (_id, _name, _date, _price) {
        try {
            await this.insuranceContract.methods.newRecord(_id, _name, _date, _price)
                .send({from: this.accounts[2], gas: '300000'})
        } catch (error) {
            console.log(error);
        }
    }

    async onSubmitFromHospital(_id) {
        try {
            await this.insuranceContract.methods.signRecord(_id)
                .send({from: this.accounts[0], gas: '200000'})
        } catch (error) {
            console.log(error);
        }
    }

    async onSubmitFromInsurer(_id) {
        try {
            await this.insuranceContract.methods.signRecord(_id)
                .send({from: this.accounts[1], gas: '200000'})
        } catch (error) {
            console.log(error);
        }
    }

    async getAllRecordIds () {
        try {
            return await this.insuranceContract.methods.getAllRecordIds()
                .call({from: this.accounts[2], gas: '200000'})
        } catch (error) {
            console.log(error);
        }
    }

    async getRecordById (id) {
        try {
            return await this.insuranceContract.methods.all_records(id)
                .call({from: this.accounts[2], gas: '200000'})
        } catch (error) {
            console.log(error);
        }
    }

}

export default InsuranceContract;
