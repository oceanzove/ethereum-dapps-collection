import ContractManager from "../Services/ContractManager";

class MyCoinContract {
    constructor() {
        this.contractManager = null;
        this.myCoinContract = null;
        this.accounts = null;
        this.web3 = null;
        this.init();
    }

    async init() {
        try {
            this.contractManager = await this.getContractManager();
            this.web3 = await this.getWeb3();
            this.accounts = await this.getAccounts();

            this.myCoinContract = await this.getAddressContract('MyCoinContract')

            if (await this.checkOwnerAddress() !== this.accounts[0]) {
                await this.coin();
            }

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

    async checkOwnerAddress () {
        try {
            return  await this.myCoinContract.methods.owner()
                .call({from: this.accounts[0], gas: '200000'})
        } catch (error) {
            console.log(error);
        }
    }

    async coin() {
        try {
            await this.myCoinContract.methods.coin()
                .send({from: this.accounts[0], gas: '200000'});
        } catch (error) {
            console.log(error);
        }
    }

    async totalSupple() {
        try {
            return await this.myCoinContract.methods.totalSupple()
                .call({from: this.accounts[0], gas: '200000'});
        } catch (error) {
            console.log(error);
        }
    }

    async balanceOf(_owner) {
        try {
            return await this.myCoinContract.methods.balanceOf(_owner)
                .call({from: this.accounts[0], gas: '200000'});
        } catch (error) {
            console.log(error);
        }
    }

    async transfer(_to, _value) {
        try {
            await this.myCoinContract.methods.transfer(_to, _value)
                .send({from: this.accounts[0], gas: '200000'});
        } catch (error) {
            console.log(error);
        }
    }

}

export default MyCoinContract;
