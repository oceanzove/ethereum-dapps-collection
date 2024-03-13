import ContractManager from "../Services/ContractManager";

class VoterContract {
    constructor() {
        this.contractManager = null;
        this.voterContract = null;
        this.accounts = null;
        this.init();
    }

    async init() {
        try {
            this.contractManager = await this.getContractManager();
            this.voterContract = await this.getAddressContract();
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

    async getAddressContract() {
        try {
            return await this.contractManager.getContract('VoterContract');
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


    async addCandidate(name) {
        try {
            await this.init()
            await this.voterContract.methods.addCandidate(name)
                .send({from: this.accounts[0], gas: '100000'})
        } catch (error) {
            console.log(error);
        }
    }

    async getCandidates() {
        try {
            await this.init();
            return await this.voterContract.methods.getAll()
                .call({from: this.accounts[0]})
        } catch (error) {
            console.log(error);
        }
    }

    async getLastCandidate() {
        try {
            await this.init();
            return await this.voterContract.methods.getLastCandidate()
                .call({from: this.accounts[0]})
        } catch (error) {
            console.log(error);
        }
    }

    async vote(index, address) {
        try {
            await this.init();
            return await this.voterContract.methods.vote(index)
                .send({from: address})
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default VoterContract;
