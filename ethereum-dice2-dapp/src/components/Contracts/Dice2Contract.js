import ContractManager from "../Services/ContractManager";

class DiceContract {
    constructor() {
        this.contractManager = null;
        this.diceContract = null;
        this.accounts = null;
        this.init();
    }

    async init() {
        try {
            this.contractManager = await this.getContractManager();
            this.diceContract = await this.getAddressContract();
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
            return await this.contractManager.getContract('Dice2Contract');
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
            const response = await this.diceContract.methods.rollDices(randomNumbers).call({});
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }
}

export default DiceContract;
