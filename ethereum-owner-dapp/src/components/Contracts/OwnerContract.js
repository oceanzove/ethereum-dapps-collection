import ContractManager from "../Services/ContractManager";

class OwnerContract {
    constructor() {
        this.contractManager = null;
        this.ownerContract = null;
        this.init();
    }

    async init() {
        try {
            this.contractManager = await this.getContractManager();
            this.ownerContract = await this.getStoreContract();
        } catch (error) {
            console.error(error);
        }
    }

    async getContractManager() {
        const manager = new ContractManager();
        await manager.init();
        return manager;
    }

    async getStoreContract() {
        try {
            return await this.contractManager.getContract('OwnerContract');
        } catch (error) {
            console.error(error);
        }
    }

    async setUser(name, number, age, userAddress) {
        try {
            await this.ownerContract.methods.setUser(name, number, age)
                .send({from: userAddress, gas: 200000, gasPrice: '1000000'});
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async getUser(name, userAddress){
        try {
           return await this.ownerContract.methods.getUser(name)
                .call({from: userAddress, gas: '200000', gasPrice: '1000000'});
        } catch (error) {
            console.log(error)
            return false;
        }
    }
}

export default OwnerContract;
