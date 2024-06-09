import ContractManager from "../Services/ContractManager";

class LuckySevenContract {
    constructor() {
        this.contractManager = null;
        this.luckySevenContract = null;
        this.accounts = null;
        this.init();
    }

    async init() {
        try {
            this.contractManager = await this.getContractManager();
            this.luckySevenContract = await this.getAddressContract();
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
            return await this.contractManager.getContract('LuckySevenContract');
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

    async Random(x) {
        try {
            await this.init()
            return await this.luckySevenContract.methods.Random(x)
                .call({from: this.accounts[0], gas: '200000'})
        } catch (error) {
            console.log(error);
        }
    }

}

export default LuckySevenContract;
