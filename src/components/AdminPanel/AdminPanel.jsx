import React, { useContext, useEffect, useState } from "react";
import ContractManagerContext from "../Services/ContractManagerContext";
import StoreItem from "../Utils/StoreList/StoreList";
import UserItem from "../Utils/UserList/UserList";

const AdminPanel = () => {
  const { contractManager } = useContext(ContractManagerContext);
  const [StoreContract, setStoreContract] = useState(null);
  const [storeElements, setStoreElements] = useState([]);
  const [userElements, setUserElements] = useState([]);

  useEffect(() => {
    const getContract = async () => {
      try {
        const contract = await contractManager.getContract('StoreContract');
        setStoreContract(contract);
      } catch (error) {
        console.error(error);
      }
    };
    getContract();
  }, [contractManager]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        if (StoreContract) {
          const response = await StoreContract.methods.getApprovedStores().call();
          const stores = response.map(s => <StoreItem key={s.id} name={s.name} owner={s.owner} />);
          setStoreElements(stores);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchStores();
  }, [StoreContract]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (StoreContract) {
          const response = await StoreContract.methods.getAllUsers().call();
          const users = response.map(s => <UserItem key={s.id} name={s.name} password={s.password} />);
          setUserElements(users);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, [StoreContract]);



  const createStore = async () => {
    try {
      const nameInput = document.querySelector('input[name="input-name-store"]');
      const ownerInput = document.querySelector('input[name="input-owner-store"]');
      const name = nameInput.value;
      const owner = ownerInput.value;
      await StoreContract.methods.registerStore(name, owner).send({
        from: '0x23d34e1986a063c86047dD0E3C4883015CFaE1E8', gas: 200000 });
      await StoreContract.methods.approveStore( owner).send({
        from: '0x23d34e1986a063c86047dD0E3C4883015CFaE1E8', gas: 200000 });
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div>
      <div>
        <div>
          Создать магазин
          <input name='input-name-store' type="text" placeholder="Название магазина" />
          <input name='input-owner-store' type="text" placeholder="Адрес владельца"/>
          <button onClick={createStore}>Создать</button>
        </div>
        Список магазинов
        <div>
          {storeElements}
        </div>
      </div>
      <div>
        Добавить админа
      </div>
      <div>
        Список юзеров и возможжность повысить понизить
        {userElements}
        выводи их роль, ода
      </div>
    </div>

  );
};

export default AdminPanel;