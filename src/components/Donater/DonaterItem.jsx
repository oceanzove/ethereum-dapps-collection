import React from "react";
import styles from './DonaterItem.module.css';

const DonaterItem = (props) => {
    return (
        <div className={styles.container}>
            {props.donater}
        </div>
    )
}

export default DonaterItem;
