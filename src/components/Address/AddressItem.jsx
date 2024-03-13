import React from "react";
import styles from './AddressItem.module.css';

const AddressItem = (props) => {
    return(
      <div className={styles.container}>
          Index: {props.index.toString()} {props.address}
      </div>
  )
}

export default AddressItem;
