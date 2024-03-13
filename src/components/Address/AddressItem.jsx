import React from "react";
import styles from './AddressItem.module.css';

const AddressItem = (props) => {
  return(
      <div>
          Index: {props.index} {props.address}
      </div>
  )
}

export default AddressItem;
