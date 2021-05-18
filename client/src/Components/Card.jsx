import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendToCart, setTotalItemCount, setTotalPrice } from '../Redux/app/action';
import style from "../Style/Home.module.css"
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
const useStyles = makeStyles(() => ({
    addBtn: {
      backgroundColor: "red",
      color: "white",
      "&:hover ": {
          backgroundColor: "rgb(206, 0, 0)",
          color: "white"
      }
    },
    starIcon: {
        fontSize: "20px",
        color: "gold"
    }
  }));

const Card = ({data}) => {
    const classes = useStyles();
    const {_id, name, img_url, price, rating, reviews} = data
    const dispatch = useDispatch()
    const cart = useSelector(state => state.app.cart)
    const count = useSelector(state => state.app.count)
    const totalPrice = useSelector(state => state.app.totalPrice)
    const [add, setAdded] = useState(false)
    let starArray = []
    for(let i = 0; i < Math.ceil(rating); i++){
        starArray.push("star")
    }

    const addToCart = () => {
        let flag = false;
        setAdded(true)

        // check if item exist or not
        for(let i = 0; i < cart.length; i++){
            if(cart[i]._id === _id){
                flag = true
                break;
            }
        }

        // if item con exist then add to cart, increase item count, set new total price
        if(flag === false){
            dispatch(sendToCart([...cart, data]))
            dispatch(setTotalItemCount(count + 1))
            let newTotalPrice = totalPrice + price
            dispatch(setTotalPrice(newTotalPrice))
        }
    }
    return (
        <Grid container md={2} sm={5} xs={7} direction="column" alignItems="flex-start" className={style.cardGrid}>
            <img className={style.cardImg} src={img_url}  alt="food"/>
            <Typography className={style.cardText} variant="h6"><b>{name}</b></Typography>
            <Grid container direction="row" alignItems="center" style={{margin: "0px 10px"}}>
                {
                    starArray && starArray.map((el) => <StarIcon className={classes.starIcon} />)
                }
                <Typography style={{margin:"0px 3px"}}>{rating}</Typography>
                <Typography variant="p" className={style.reviewsText}>({reviews} Reviews)</Typography>
            </Grid>
            <Grid container direction="row" alignItems="center" justify="space-between">
                <Typography className={style.cardText} variant="h6">₹ {price}</Typography>
            </Grid>
            {
            }
            <Grid container justify="center">
                {
                    !add ? <Button className={classes.addBtn} variant="contained" color="red" onClick={addToCart}>ADD</Button > : <Button className={classes.addBtn} variant="contained" color="red">Added</Button >
                }
            </Grid>
        </Grid>
    )
}


export { Card }