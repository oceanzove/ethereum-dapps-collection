import React from "react";
import StoreItem from "../Utils/StoreItem/StoreItem";
import UserItem from "../Utils/UserItem/UserItem";
import StoreContract from "../Contracts/StoreContract";


const AdminPanel = (props) => {
    const storeContract = new StoreContract();

    const createStore = async () => {
        const name = props.adminPage.newStoreName;
        const owner = props.adminPage.newStoreAddress;
        await storeContract.createStore(name, owner)
        props.addStore();

    }

    const deleteStore = async (owner) => {
        await storeContract.deleteStore(owner);
        props.deleteStore(owner);
    };

    const onChangeStoreName = (e) => {
        let text = e.target.value;
        props.updateNewStoreName(text);
    }

    const onChangeStoreAddress = (e) => {
        let text = e.target.value;
        props.updateNewStoreAddress(text);
    }


    let storeElements = props.adminPage.stores.map(s =>
        <StoreItem key={s.name} name={s.name} owner={s.owner}
                   deleteStore={deleteStore}
        />
    )

    const addNewAdmin = async () => {
        const name = props.adminPage.newAdminLogin;
        const password = props.adminPage.newAdminPassword;
        const userAddress = props.adminPage.newAdminAddress;
        await storeContract.createAdmin(name, password, userAddress);
        props.addAdmin();
    }

    const onChangeNewAdminLogin = (e) => {
        let text = e.target.value;
        props.updateNewAdminLogin(text);
    };
    const onChangeNewAdminPassword = (e) => {
        let text = e.target.value;
        props.updateNewAdminPassword(text);
    };
    const onChangeNewAdminAddress = (e) => {
        let text = e.target.value;
        props.updateNewAdminAddress(text);
    };

    let userElements = props.adminPage.users.map(u => {
        let role = u.isAdmin ? 'Админ' : (u.isSeller ? 'Продавец' : 'Покупатель');
        return (
            <UserItem key={u.name} name={u.name} password={u.password} role={role}/>
        );
    });

    return (
        <div>
            <div>
                <div>
                    Создать магазин
                    <input type="text" placeholder="Название магазина"
                           value={props.adminPage.newStoreName}
                           onChange={onChangeStoreName}
                    />
                    <input type="text" placeholder="Адрес владельца"
                           value={props.adminPage.newStoreAddress}
                           onChange={onChangeStoreAddress}
                    />
                    <button onClick={createStore}
                            disabled={
                                !props.adminPage.newStoreName || !props.adminPage.newStoreAddress
                            }
                    >Создать
                    </button>
                </div>
                Список магазинов
                <div>
                    {storeElements}
                </div>
            </div>
            <div>
                Добавить админа
                <input type='text' placeholder='Логин'
                       value={props.adminPage.newAdminLogin}
                       onChange={onChangeNewAdminLogin}
                />
                <input type='text' placeholder='Пароль'
                       value={props.adminPage.newAdminPassword}
                       onChange={onChangeNewAdminPassword}
                />
                <input type='text' placeholder='Адресс'
                       value={props.adminPage.newAdminAddress}
                       onChange={onChangeNewAdminAddress}
                />
                <button onClick={addNewAdmin}
                        disabled={
                            !props.adminPage.newAdminLogin || !props.adminPage.newAdminPassword || !props.adminPage.newAdminAddress
                        }
                > Добавить
                </button>
            </div>
            <div>
                Список юзеров:
                {userElements}
            </div>
        </div>

    );
};

export default AdminPanel;