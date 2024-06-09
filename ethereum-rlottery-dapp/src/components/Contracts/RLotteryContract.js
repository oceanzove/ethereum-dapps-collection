import ContractManager from "../Services/ContractManager";

class RLotteryContract {
    constructor() {
        this.contractManager = null;
        this.rLotteryContract = null;
        this.accounts = null;
        this.init();
    }

    async init() {
        try {
            this.contractManager = await this.getContractManager();
            this.rLotteryContract = await this.getAddressContract();
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
            return await this.contractManager.getContract('RLotteryContract');
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

    async getTickets(num) {
        try {
            await this.init()
            return await this.rLotteryContract.methods.getTickets(num)
                .send({from: this.accounts[0], gas: '200000', gasPrice: '1000000000' });
        } catch (error) {
            console.log(error);
        }
    }

    async winner() {
        try {
            await this.init();
            const response = await this.rLotteryContract.methods.Winner()
                .call({from: this.accounts[0], gas: '200000', gasPrice: '1000000000' });
            console.log(response)
            return response;
        } catch (error) {
            console.log(error);
        }
    }

}

export default RLotteryContract;
