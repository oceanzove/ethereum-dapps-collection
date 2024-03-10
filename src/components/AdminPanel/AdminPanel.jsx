import React, {useContext, useEffect, useState} from "react";
import ContractManagerContext from "../Services/ContractManagerContext";
import StoreItem from "../Utils/StoreList/StoreList";
import UserItem from "../Utils/UserList/UserList";


const AdminPanel = () => {


    const {contractManager} = useContext(ContractManagerContext);
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
                    const stores = response.map((s, index) =>
                        <StoreItem key={index} name={s.name} owner={s.owner} address='0x4419EF3A756AB184c046D23ECda4E34Fe8761924'/>);
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
                    const users = response.map((u, index) => <UserItem key={index} name={u.name}
                                                                       password={u.password}/>);
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
               from: owner, gas: 200000
            });
            await StoreContract.methods.approveStore(owner).send({
                 from: '0x4419EF3A756AB184c046D23ECda4E34Fe8761924', gas: 200000
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div>
                <div>
                    Создать магазин
                    <input name='input-name-store' type="text" placeholder="Название магазина"/>
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