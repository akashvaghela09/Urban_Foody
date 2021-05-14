import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendToCart, setTotalPrice } from '../Redux/app/action';
import style from "../Style/Home.module.css"

const Card = ({data}) => {
    const {id, name, img_url, price} = data
    const dispatch = useDispatch()
    const cart = useSelector(state => state.app.cart)
    const totalPrice = useSelector(state => state.app.totalPrice)
    const [add, setAdded] = useState(false)

    const addToCart = () => {
        let flag = false;
        setAdded(true)
        for(let i = 0; i < cart.length; i++){
            if(cart[i].id === id){
                flag = true
                break;
            }
        }

        if(flag === false){
            dispatch(sendToCart([...cart, data]))
            let newTotalPrice = totalPrice + price
            dispatch(setTotalPrice(newTotalPrice))
        }

        console.log(cart);
    }
    return (
        <div className={style.card}>
            <h4>Name : {name}</h4>
            <img src={img_url} width="200px" alt="food"/>
            <div>
                {
                    !add ? <button onClick={addToCart}>ADD</button> : <button>Item Added</button>
                }
            </div>

        </div>
    )
}


export { Card }