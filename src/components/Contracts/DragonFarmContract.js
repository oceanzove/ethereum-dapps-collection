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

    async getDragon(index) {
        try {
            await this.init();
            return await this.dargonFarmContract.methods.getDragonByIndex(index)
                .call();
        } catch (error) {
            return {id: '-1', name: 'undefined', dna: 0}
        }
    }

    async generateDna(_str) {
        try {
            await this.init();
            return await this.dargonFarmContract.methods.GenerateRandomDna(_str)
                .call();
        } catch (error) {
            console.log(error);
        }
    }

    async addDragon(_name, _dna) {
        try {
            await this.init();
            await this.dargonFarmContract.methods.AddDragon(_name, _dna)
                .send({from: this.accounts[0], gas: "2000000"});
        } catch (error) {
            console.log(error);
        }
    }

    async reforge(name, id, food) {
        try {
            await this.init();
            await this.dragonForgeContract.methods.Reforge(name, id, food)
                .call({from: this.accounts[0], gas: "200000", value: '10'})
        } catch (error) {
            console.log(error);
        }
    }

}

export default DragonFarmContract;
