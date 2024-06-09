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

    async getAllDragons() {
        try {
            await this.init()
            return await this.dargonFarmContract.methods.GetAllDragons()
                .call({from: this.accounts[0], gas: "2000000", gasPrice: '1000000000' });
        } catch (error) {
            console.log(error);
        }
    }

    async getDragon(index) {
        try {
            await this.init();
            const allDragons = await this.getAllDragons();
            return allDragons[index];
        } catch (error) {
            console.log(error);
        }
    }

    async generateDna(_str) {
        try {
            await this.init();
            return await this.dargonFarmContract.methods.GenerateRandomDna(_str)
                .call({from: this.accounts[0], gas: "2000000", gasPrice: '1000000000' });
        } catch (error) {
            console.log(error);
        }
    }

    async getLastDragonIndex() {
        try {
            await this.init();
            return await this.dargonFarmContract.methods.getLastDragonIndex()
                .call({from: this.accounts[0], gas: "2000000", gasPrice: '1000000000' });
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

}

export default DragonFarmContract;
