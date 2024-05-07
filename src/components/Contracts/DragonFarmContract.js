import ContractManager from "../Services/ContractManager";

class DragonFarmContract {
    constructor() {
        this.contractManager = null;
        this.dargonFarmContract = null;
        this.accounts = null;
        this.init();
    }

    async init() {
        try {
            this.contractManager = await this.getContractManager();
            this.dargonFarmContract = await this.getAddressContract();
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
            return await this.contractManager.getContract('DragonFarmContract');
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

    async getDiceRoll() {
        try {
            const randomNumbers = [];
            for (let i = 0; i < 4; i++) {
                randomNumbers.push(Math.floor(Math.random() * 9999999));
            }
            console.log(randomNumbers);
            return  await this.dargonFarmContract.methods.rollDices(randomNumbers).call({});
        } catch (error) {
            console.log(error);
        }
    }
}

export default DragonFarmContract;
