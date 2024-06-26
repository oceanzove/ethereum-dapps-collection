import ContractManager from "../Services/ContractManager";

class SplitContract {
    constructor() {
        this.contractManager = null;
        this.splitContract = null;
        this.accounts = null;
        this.web3 = null;
        this.init();
    }

    async init() {
        try {
            this.contractManager = await this.getContractManager();
            this.web3 = await this.getWeb3();
            this.accounts = await this.getAccounts();

            this.splitContract = await this.getAddressContract('SplitContract')
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
            await this.splitContract.methods.coin(receiver, amount)
                .send({from: this.accounts[0], gas: '200000', gasPrice: '1000000000' });
        } catch (error) {
            console.log(error);
        }
    }

    async send(receiver1, receiver2, receiver3, amount) {
        try {
            await this.splitContract.methods.send(receiver1, receiver2, receiver3, amount)
                .send({from: this.accounts[0], gas: '200000', gasPrice: '1000000000' });
        } catch (error) {
            console.log(error);
        }
    }

    async balance(address) {
        try {
            return await this.splitContract.methods.balances(address)
                .call({from: this.accounts[0], gas: '200000', gasPrice: '1000000000' });
        } catch (error) {
            console.log(error);
        }
    }

}

export default SplitContract;
