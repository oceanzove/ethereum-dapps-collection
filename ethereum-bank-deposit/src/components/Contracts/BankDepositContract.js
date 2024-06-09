import ContractManager from "../Services/ContractManager";

class BankDepositContract {
    constructor() {
        this.contractManager = null;
        this.bankDepositContract = null;
        this.accounts = null;
        this.web3 = null;
        this.init();
    }

    async init() {
        try {
            this.contractManager = await this.getContractManager();
            this.web3 = await this.getWeb3();
            this.accounts = await this.getAccounts();

            this.bankDepositContract = await this.getAddressContract('BankDepositContract')
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

    async getContractBalance() {
        try {
            return await this.bankDepositContract.methods.getContractBalance()
                .call({from: this.accounts[0], gas: '200000'});
        } catch (error) {
            console.log(error);
        }
    }

    async bankAccount(address, amount) {
        try {
            await this.bankDepositContract.methods.bankAccount()
                .send({from: address, gas: '2000000', value: this.web3.utils.toWei(amount, 'ether')});
        } catch (error) {
            console.log(error);
        }
    }

    async getRemainingTime(address) {
        try {
            return await this.bankDepositContract.methods.getRemainingTime()
                .call({from: address, gas: '200000'});
        } catch (error) {
            console.log(error);
        }
    }

    async deposit(address, amount) {
        try {
            await this.bankDepositContract.methods.deposit()
                .send({from: address, gas: '200000', value: this.web3.utils.toWei(amount, 'ether')})
        } catch (error) {
            console.log(error);
        }
    }

    async collectPercent(address) {
        try {
            await this.bankDepositContract.methods.collectPercent()
                .send({from: address, gas: '200000'})
        } catch (error) {
            console.log(error);
        }
    }

    async returnDeposit(address) {
        try {
            await this.bankDepositContract.methods.returnDeposit()
                .send({from: address, gas: '200000'})
        } catch (error) {
            console.log(error);
        }
    }



    async percentRate(address) {
        try {
            return await this.bankDepositContract.methods.percentRate()
                .call({from: address, gas: '200000'})
        } catch (error) {
            console.log(error);
        }
    }

    async payoutAmount(address) {
        try {
            return await this.bankDepositContract.methods.payoutAmount()
                .call({from: address, gas: '200000'})
        } catch (error) {
            console.log(error);
        }
    }

}

export default BankDepositContract;
