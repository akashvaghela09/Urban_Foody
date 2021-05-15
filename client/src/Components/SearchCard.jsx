import React from 'react';
import styles from "../Style/SearchBar.module.css";

const SearchCard = ({data}) => {
    const {img_url, name, price} = data

    return (
        <div className={styles.searchCard}>
            <img className={styles.resImg} src={img_url} alt="search result"/>
            <div>
            <p className={styles.resName}><b>{name}</b></p>
            <p>₹ {price}</p>
            </div>
        </div>
    )
}

export { SearchCard }