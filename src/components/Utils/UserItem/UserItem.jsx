import React from "react";
import styles from './UserItem.module.css'
const UserItem = (props) => {

    const deleteStore =  async () => {
        try {
            console.log('cooming soon')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.container}>
            <div>{props.name}</div>
            <div>{props.password}</div>
            <button onClick={deleteStore}> Повысить </button>
            <button onClick={deleteStore}> Понизить </button>
        </div>
    );
};

export default UserItem;