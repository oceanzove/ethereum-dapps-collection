import React from "react";
import styles from './WalletItem.module.css';
const WalletItem = (props) => {
    return (
        <div className={styles.container}>
            <div>Адрес: {props.walletAddress}</div>
            <div>Приватный ключ: {props.privateKey}</div>
            <div>Баланс: {props.balance.toString()} ether</div>
        </div>
    )
}

export default WalletItem;
