import ContractManager from "../Services/ContractManager";

class GradesContract {
    constructor() {
        this.contractManager = null;
        this.gradesContract = null;
        this.accounts = null;
        this.init();
    }

    async init() {
        try {
            this.contractManager = await this.getContractManager();
            this.gradesContract = await this.getStoreContract();
            this.accounts = await this.getAccounts();
        } catch (error) {
            console.error(error);
        }
    }

    async getContractManager() {
        const manager = new ContractManager();
        await manager.init();
        return manager;
    }

    async getStoreContract() {
        try {
            return await this.contractManager.getContract('GradesContract');
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

    async setGrade(title, grade) {
        try {
            await this.gradesContract.methods.setGrade(title, grade)
                .send({from: this.accounts[0], gas: 200000, gasPrice: '1000000'})
        } catch (error) {
            console.log(error);
        }
    }
    async getResults(title) {
        try {
            return await this.gradesContract.methods.results(title)
                .call({from: this.accounts[0], gas: 200000, gasPrice: '1000000'})
        } catch (error) {
            console.log(error)
        }
    }
}

export default GradesContract;
