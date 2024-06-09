import ContractManager from "../Services/ContractManager";

class DragonFarmContract {
    constructor() {
        this.contractManager = null;
        this.dargonFarmContract = null;
        this.accounts = null;
        this.web3 = null;
        this.init();
    }

    async init() {
        try {
            this.contractManager = await this.getContractManager();
            this.web3 = await this.getWeb3();
            this.dargonFarmContract = await this.getAddressContract('DragonFarmContract');
            this.dragonForgeContract = await this.getAddressContract('DragonForgeContract')
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

    async getDragon(index) {
        try {
            await this.init();
            return await this.dargonFarmContract.methods.getDragonByIndex(index)
                .call({from: this.accounts[0], gas: '200000', gasPrice: '1000000000'});
        } catch (error) {
            return {id: '-1', name: 'undefined', dna: 0}
        }
    }

    async generateDna(_str) {
        try {
            await this.init();
            return await this.dargonFarmContract.methods.GenerateRandomDna(_str)
                .call({from: this.accounts[0], gas: '200000', gasPrice: '1000000000'});
        } catch (error) {
            console.log(error);
        }
    }

    async addDragon(_name, _dna) {
        try {
            await this.init();
            await this.dargonFarmContract.methods.AddDragon(_name, _dna)
                .send({from: this.accounts[0], gas: "2000000", gasPrice: '1000000000' });
        } catch (error) {
            console.log(error);
        }
    }

    async reforge(name, id, food) {
        console.log(name, id, food);
        try {
            await this.init();
            await this.dargonFarmContract.methods.Reforge(name, id, food)
                .send({from: this.accounts[0], gas: "200000", value: this.web3.utils.toWei('10', 'ether'), gasPrice: '1000000000' })
        } catch (error) {
            console.log(error);
        }
    }

}

export default DragonFarmContract;
