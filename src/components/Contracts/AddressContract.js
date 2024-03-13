import ContractManager from "../Services/ContractManager";

class AddressContract {
    constructor() {
        this.contractManager = null;
        this.addressContract = null;
        this.accounts = null;
        this.init();
    }

    async init() {
        try {
            this.contractManager = await this.getContractManager();
            this.addressContract = await this.getAddressContract();
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
            return await this.contractManager.getContract('AddressContract');
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


    async set(address) {
        try {
            await this.addressContract.methods.set(address)
                .send({from: address})
        } catch (error) {
            console.log(error);
        }
    }

    async getIndex(address) {
        try {
            return await this.addressContract.methods.get(address)
                .call();
        } catch (error) {
            console.log(error);
        }
    }

    async getAllAddress() {
        try {
           return await this.addressContract.getAll()
               .call();
        } catch (error) {
            console.log(error);
        }
    }

}

export default AddressContract;
