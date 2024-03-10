import React, {useContext, useEffect, useState} from "react";
import styles from './StoreItem.module.css';
import ContractManagerContext from "../../Services/ContractManagerContext";

const StoreItem = (props) => {
    const {contractManager} = useContext(ContractManagerContext);
    const [StoreContract, setStoreContract] = useState(null);

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

    const onDeleteClick = async () => {
        try {
            const storeAddress = props.owner;
            await StoreContract.methods.removeStore(storeAddress)
                .send({from: props.address, gas: 2000000});
            props.deleteStore(storeAddress);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className={styles.container}>
            <div>{props.name}</div>
            <div>{props.owner}</div>
            <button onClick={onDeleteClick}> Удалить</button>
        </div>
    );
};

export default StoreItem;
