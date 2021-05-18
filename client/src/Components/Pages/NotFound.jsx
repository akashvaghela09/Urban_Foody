import React from 'react';
import styles from "../../Style/NotFound.module.css";

const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>Page Not Found</p>
        </div>
    )
}

export  { NotFound }