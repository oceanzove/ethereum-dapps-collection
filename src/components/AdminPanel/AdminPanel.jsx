import React, {useContext, useEffect, useState} from "react";
import ContractManagerContext from "../Services/ContractManagerContext";
import StoreItem from "../Utils/StoreItem/StoreItem";
import UserItem from "../Utils/UserItem/UserItem";


const AdminPanel = (props) => {
    const {contractManager} = useContext(ContractManagerContext);
    const [StoreContract, setStoreContract] = useState(null);
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

    // useEffect(() => {
    //     const fetchStores = async () => {
    //         try {
    //             if (StoreContract) {
    //                 const response = await StoreContract.methods.getApprovedStores().call();
    //                 const stores = response.map((s, index) =>
    //                     <StoreItem key={index} name={s.name} owner={s.owner} address='0x4419EF3A756AB184c046D23ECda4E34Fe8761924'/>);
    //                 setStoreElements(stores);
    //             }
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchStores();
    // }, [StoreContract]);

    let storeElements = props.adminPage.stores.map(s =>
        <StoreItem key={s.index} name={s.name} owner={s.owner}
                   address='0x4419EF3A756AB184c046D23ECda4E34Fe8761924'
                   deleteStore={props.deleteStore}
        />
    )

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
            props.addStore();
        } catch (error) {
            console.log(error);
        }
    }

    const onChangeStoreName = (e) => {
        let text = e.target.value;
        props.updateNewStoreName(text);
    }

    const onChangeStoreAddress = (e) => {
        let text = e.target.value;
        props.updateNewStoreAddress(text);
    }

    return (
        <div>
            <div>
                <div>
                    Создать магазин
                    <input name='input-name-store'
                           type="text" placeholder="Название магазина"
                           value={props.adminPage.newStoreName}
                           onChange={onChangeStoreName}
                    />
                    <input name='input-owner-store'
                           type="text" placeholder="Адрес владельца"
                           value={props.adminPage.newStoreAddress}
                           onChange={onChangeStoreAddress}
                    />
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