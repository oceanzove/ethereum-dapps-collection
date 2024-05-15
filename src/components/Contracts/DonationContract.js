import ContractManager from "../Services/ContractManager";

class DonationContract {
    constructor() {
        this.contractManager = null;
        this.donationContract = null;
        this.accounts = null;
        this.web3 = null;
        this.init();
    }

    async init() {
        try {
            this.contractManager = await this.getContractManager();
            this.web3 = await this.getWeb3();
            this.accounts = await this.getAccounts();

            this.donationContract = await this.getAddressContract('DonationContract')
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

    async gatherDonation(address, value) {
        try {
            await this.donationContract.methods.gatherDonation()
                .send({from: address, gas: '200000', value: this.web3.utils.toWei(value, 'ether')})
        } catch (error) {
            console.log(error);
        }
    }

    async transferToOwner() {
        try {
            await this.donationContract.methods.transferToOwner()
                .call({from: this.accounts[0], gas: '200000'});
        } catch (error) {
            console.log(error);
        }
    }

    async getDonators() {
        try {
            return await this.donationContract.methods.getDonators()
                .call({from: this.accounts[0], gas: '200000'});
        } catch (error) {
            console.log(error);
        }
    }

    async getContractBalance() {
        try {
            return await this.donationContract.methods.getContractBalance()
                .call({from: this.accounts[0], gas: '200000'});
        } catch (error) {
            console.log(error);
        }
    }

}

export default DonationContract;
