import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems, setTotalPrice } from '../Redux/app/action';

const CartCard = ({data}) => {
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
        <div style={{border: "1px solid red"}}>
            <h2>{data.name}</h2>
            <img src={data.img_url} alt="product" width="200"/>
            <h2>{itemPrice}</h2>
            <div>
                <button onClick={handleAdd}>+</button>
                {count}
                <button onClick={handleRemove}>-</button>
            </div>
        </div>
    )
}

export { CartCard }