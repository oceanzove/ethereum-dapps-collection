import React from "react";
import styles from './DragonItem.module.css';
const DragonItem = (props) => {
    return(
        <div className={styles.container}>
            {props.index.toString()}: {props.name} - {props.dna.toString()}
        </div>
    )
}

export default DragonItem;