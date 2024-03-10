import React from "react";
import styles from './StoreItem.module.css';

const StoreItem = (props) => {
    const onDeleteClick = () => {
       props.deleteStore(props.owner)
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
