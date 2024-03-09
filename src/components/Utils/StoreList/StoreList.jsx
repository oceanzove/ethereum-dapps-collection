import React from "react";
import styles from './StoreList.module.css';

const StoreItem = (props) => {

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
       <div>{props.owner}</div>
        <button onClick={deleteStore}> Удалить </button>
    </div>
  );
};

export default StoreItem;
