import React from "react";
import styles from './StoreList.module.css';

const StoreItem = (props) => {
  return (
    <div className={styles.container}>
       <div>{props.name}</div>
       <div>{props.owner}</div>
    </div>
  );
};

export default StoreItem;
