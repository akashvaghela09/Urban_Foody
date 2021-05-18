import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Cart } from '../Cart';
import styles from "../../Style/Cart.module.css"

const CheckoutPage = () => {
    return (
        <Grid container justify="center"  style={{minHeight: "90vh"}}>
            <Grid md={6} style={{border: "1px solid red"}}>
                <Cart />
                <p className={styles.placeOrder}>Place Your Order</p>
            </Grid>
        </Grid>
    )
}

export { CheckoutPage }