import ContractManager from "../Services/ContractManager";

class TransactionContract {
    constructor() {
        this.contractManager = null;
        this.transactionContract = null;
        this.accounts = null;
        this.web3 = null;
        this.init();
    }

    async init() {
        try {
            this.contractManager = await this.getContractManager();
            this.web3 = await this.getWeb3();
            this.accounts = await this.getAccounts();

            this.transactionContract = await this.getAddressContract('TransactionContract')
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

    async coin(receiver, amount) {
        try {
            await this.transactionContract.methods.coin(receiver, amount)
                .send({from: this.accounts[0], gas: '200000'});
        } catch (error) {
            console.log(error);
        }
    }

    async send(receiver, amount) {
        try {
            await this.transactionContract.methods.send(receiver, amount)
                .send({from: this.accounts[0], gas: '200000'});
        } catch (error) {
            console.log(error);
        }
    }

    async balance(address) {
        try {
            return await this.transactionContract.methods.balances(address)
                .call({from: this.accounts[0], gas: '200000'});
        } catch (error) {
            console.log(error);
        }
    }
}

export default TransactionContract;
