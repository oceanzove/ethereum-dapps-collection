import ContractManager from "../Services/ContractManager";
import tr from "../Table/Tr/Tr";

class AddressContract {
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


    async addCandidate(candidate) {
        try {
            await this.init()
            await this.voterContract.methods.addCandidate(candidate)
                .send({from: this.accounts[0], gas: '100000'})
        } catch (error) {
            console.log(error);
        }
    }
    //    mapping(uint => Candidate) public candidates;
    async getCandidates() {
        try {
            return await this.voterContract.candidates
                .call({from: this.accounts[0]})
        } catch (error) {
            console.log(error);
        }
    }

    async getAllAddress() {
        try {
            await this.init()
            return await this.addressContract.methods.getAll()
                .call();
        } catch (error) {
            console.log(error);
        }
    }

}

export default AddressContract;
