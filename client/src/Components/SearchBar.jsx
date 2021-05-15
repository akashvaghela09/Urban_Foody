import React, { useState } from 'react';
import styles from "../Style/SearchBar.module.css";
import axios from "axios";
import { SearchCard } from './SearchCard';
import CloseIcon from '@material-ui/icons/Close';

const SearchBar = () => {
    const [string, setString] = useState("")
    const [data, setData] = useState([])
    const handleSearch = (e) =>{
        setString(e.target.value)

        axios.get(`${process.env.REACT_APP_DATABASE_URL}/?q=${string}`)
        .then((res) => {
            console.log(res);
            setData(res.data.data)
        })
        console.log(data);
    }

    const setReset = () => {
        setData(null)
        setString("")
    }
    return (
        <div className={styles.mainWrapper}>
            <img className={styles.foodImg} src="./images/mainbanner.jpg" alt="Food" />
            <div className={styles.searchDiv}>
                <p className={styles.heading}>Discover the Best Food</p>
                <div className={styles.inputDiv}>
                    <input value={string} onChange={(e) => handleSearch(e)} className={styles.searchbar} placeholder="Search for Pizza"/>
                    <CloseIcon className={styles.closeBtn} onClick={setReset}/>
                </div>
                <div className={styles.searchResDiv}>
                    {
                        data && data.map((el) => <SearchCard data={el}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export { SearchBar }