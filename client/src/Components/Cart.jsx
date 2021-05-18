import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { CartCard } from './CartCard';
import styles from "../Style/Cart.module.css"

const Cart = () => {

    const cart = useSelector(state => state.app.cart)
    const totalPrice = useSelector(state => state.app.totalPrice)

    return (
        <Grid>
            {
                cart && cart.map((el, index) => <CartCard key={index} data={el}/>)
            }
            <p className={styles.totalAmount}  >Total: ₹ {totalPrice}</p>
        </Grid>
    )
}

export { Cart }