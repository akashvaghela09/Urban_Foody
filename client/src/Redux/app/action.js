import { GET_DATA, 
    SEND_TO_CART, 
    SET_CART_ITEMS,
    SET_LOGIN,
    SET_TOTAL_ITEM_COUNT,
    SET_TOTAL_PRICE
} from "./actionType"

const getData = (payload) => {
    return {
        type: GET_DATA,
        payload
    }
}

const sendToCart = (payload) => {
    return {
        type: SEND_TO_CART,
        payload
    }
}

const setCartItems = (payload) => {
    return {
        type: SET_CART_ITEMS,
        payload
    }
}

const setTotalPrice = (payload) => {
    return {
        type: SET_TOTAL_PRICE,
        payload
    }
}

const setTotalItemCount = (payload) => {
    return {
        type: SET_TOTAL_ITEM_COUNT,
        payload
    }
}

const setLogin = (payload) => {
    return {
        type: SET_LOGIN,
        payload
    }
}

export { 
    getData,
    sendToCart,
    setCartItems,
    setTotalPrice,
    setTotalItemCount,
    setLogin
}