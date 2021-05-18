import { Button, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems, setTotalPrice } from '../Redux/app/action';
import styles from "../Style/Cart.module.css"

const useStyles = makeStyles(() => ({
    cartBtn: {
        padding: "0px",
        background: "red",
        color: "white",
        width: "40px",
        "&:hover ": {
            background: "red",
            color: "white"
        }
    }
}));

const CartCard = ({data}) => {
    const classes = useStyles();
    const  {name, id, img_url, price} = data
    const dispatch = useDispatch()
    const cartItemList = useSelector(state => state.app.cartItemList)
    const totalPrice = useSelector(state => state.app.totalPrice)
    let [count, setCount] = useState(1)
    let itemPrice = price * count
    

    const handleAdd = () => {
        let newCount = count + 1
        setCount(newCount)
        let newTotalPrice = totalPrice + price
        dispatch(setTotalPrice(newTotalPrice))
    }

    const handleRemove = () => {
        if(count > 0) {
            setCount(count - 1)
            let newTotalPrice = totalPrice - price

            dispatch(setTotalPrice(newTotalPrice))
        } 
    }

   
    return (
        <div className={styles.cartCard}>
            <div className={styles.cardImgDiv}> 
                <img src={data.img_url} alt="product" className={styles.cardImg}/>
            </div>
            <div className={styles.cardInfoDiv}>
                <p className={styles.foodName}>{data.name}</p>
                <p className={styles.foodPrice}>₹ {itemPrice}</p>
                <div className={styles.btnDiv}>
                    <Button className={classes.cartBtn} onClick={handleAdd}>+</Button>
                    <p className={styles.itemCount}>{count}</p>
                    <Button className={classes.cartBtn} onClick={handleRemove}>-</Button>
                </div>
            </div>
        </div>
    )
}

export { CartCard }