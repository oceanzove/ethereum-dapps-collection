import React, { useContext, useEffect, useState } from "react";
import ContractManagerContext from "../Services/ContractManagerContext";
import StoreItem from "../Utils/StoreList";

const AdminPanel = () => {
  const { contractManager } = useContext(ContractManagerContext);
  const [StoreContract, setStoreContract] = useState(null);
  const [storeElements, setStoreElements] = useState([]);

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

  return (
    <div>
      <div>
        <div>
          Создать магазин
          <input type="text" placeholder="Название магазина" />
          <input type="text" placeholder="Адрес владельца"/>
          <button>Создать</button>
        </div>
        Удалить магазин
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
      </div>
    </div>

  );
};

export default AdminPanel;