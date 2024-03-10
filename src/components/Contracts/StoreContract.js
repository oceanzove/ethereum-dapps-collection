import ContractManager from "../Services/ContractManager";

class StoreContract {
    constructor() {
        this.contractManager = null;
        this.storeContract = null;
        this.init();
    }

    async init() {
        try {
            this.contractManager = await this.getContractManager();
            this.storeContract = await this.getStoreContract();
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
            return await this.contractManager.getContract('StoreContract');
        } catch (error) {
            console.error(error);
        }
    }

    async authorizationUser(username, password, address) {
        try {
            // Дожидаемся завершения инициализации перед вызовом метода
            await this.init();
            return await this.storeContract.methods.authUser(username, password)
                .call({ from: address });
        } catch (error) {
            console.log(error);
        }
    }

    async isAdmin(username, password, address) {
        try {
            // Дожидаемся завершения инициализации перед вызовом метода
            await this.init();
            return await this.storeContract.methods.isAdmin(username, password)
                .call({ from: address });
        } catch (error) {
            console.log(error);
        }
    }
}

export default StoreContract;
