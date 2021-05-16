import React from 'react';
import { useSelector } from 'react-redux';
import { CartCard } from './CartCard';

const Cart = () => {

    const cart = useSelector(state => state.app.cart)
    const totalPrice = useSelector(state => state.app.totalPrice)
    const handleCheck = () => {
        console.log(cart);
    }
    return (
        <div>
            <h1>Cart</h1>
            <button onClick={handleCheck}>Check</button>
            <h1>{totalPrice}</h1>
            {
                cart && cart.map((el, index) => <CartCard key={index} data={el}/>)
            }
        </div>
    )
}

export { Cart }