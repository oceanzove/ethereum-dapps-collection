import ContractManager from "../Services/ContractManager";

class GenerateSeedContract {
    constructor() {
        this.contractManager = null;
        this.generateSeedContract = null;
        this.accounts = null;
        this.web3 = null;
        this.init();
    }

    async init() {
        try {
            this.contractManager = await this.getContractManager();
            this.web3 = await this.getWeb3();
            this.accounts = await this.getAccounts();

            this.generateSeedContract = await this.getAddressContract('GenerateSeedContract')
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

    async generateSeeds(_numberOfSeeds, _seeds) {
        try {
            await this.generateSeedContract.methods.generateMultipleSeeds(_numberOfSeeds, _seeds)
                .send({from: this.accounts[0], gas: '2200000'})
        } catch (error) {
            console.log(error);
        }
    }

    async wallets() {
        try {
            await this.init();
            return await this.generateSeedContract.methods.getWallets()
                .call({from: this.accounts[0], gas: '200000'})
        } catch (error) {
            console.log(error);
        }
    }
}

export default GenerateSeedContract;
