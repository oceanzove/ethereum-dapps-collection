import ContractManager from "../Services/ContractManager";

class StoreContract {
    constructor() {
        this.contractManager = null;
        this.storeContract = null;
        this.adminAccount = null;
        this.init();
    }

    async init() {
        try {
            this.contractManager = await this.getContractManager();
            this.storeContract = await this.getStoreContract();
            this.adminAccount = await this.getAdminAccount();
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

    async getAdminAccount() {
        const accounts = await this.contractManager.getWeb3().eth.getAccounts();
        if (accounts && accounts.length > 0) {
            return accounts[0];
        } else {
            throw new Error('No accounts found');
        }
    }

    async authorizationUser(username, password, address) {
        try {
            await this.init();
            return await this.storeContract.methods.authUser(username, password).call({
                from: address });
        } catch (error) {
            console.log(error);
        }
    }

    async registrationUser(name, password, userAddress){
        try {
            await this.init();
            await this.storeContract.methods.registerUser(name, password, userAddress).send({
                from: userAddress, gas: 200000
            })
        } catch (error) {
            console.log(error);
        }
    }

    async createAdmin(name, password, userAddress){
        try {
            await this.init();
            await this.storeContract.methods.createAdmin(name, password, userAddress).send({
                from: userAddress, gas: 200000
            })
        } catch (error) {
            console.log(error);
        }
    }
    async approveAdmin(userAddress) {
        try {
            console.log('approve to admin')
            await this.init();
            await this.storeContract.methods.approveAdmin(userAddress).send({
                from: this.adminAccount, gas: 200000
            })
        } catch (error) {
            console.log(error);
        }
    }

    async isAdmin(username, password, address) {
        try {
            await this.init();
            return await this.storeContract.methods.isAdmin(username, password)
                .call({ from: address });
        } catch (error) {
            console.log(error);
        }
    }

    async createStore(name, owner){
        try {
            await this.storeContract.methods.registerStore(name, owner).send({
                from: owner, gas: 200000
            });
            await this.storeContract.methods.approveStore(owner).send({
                from: this.adminAccount, gas: 200000
            })
        } catch (error) {
            console.log(error);
        }
    }

    async deleteStore(storeAddress){
        try {
            await this.storeContract.methods.removeStore(storeAddress).send({
                from: this.adminAccount, gas: 2000000
            });
        } catch (error) {
            console.log(error);
        }
    }

    async getStores() {
        try {
            await this.init();
            return await this.storeContract.methods.getApprovedStores().call();
        } catch (error) {
            console.error(error);
        }
    }

    async getUsers() {
        try {
            await this.init();
            return await this.storeContract.methods.getAllUsers().call();
        } catch (error) {
            console.log(error)
        }
    }


}

export default StoreContract;
