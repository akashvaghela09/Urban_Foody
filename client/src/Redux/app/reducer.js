import { 
    GET_DATA,
    SEND_TO_CART,
    SET_CART_ITEMS,
    SET_TOTAL_PRICE
} from './actionType'

const initialState = {
    isLoading: false,
    isError: false,
    data: [],
    cart: [],
    cartItemList: [],
    totalPrice: 0,
    isAuth: true,
    count: 4
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_DATA:
            return {
                ...state,
                data: payload,
                isError: false,
                isLoading: false
            }
        case SEND_TO_CART:
            return {
                ...state,
                cart: payload
            }
        case SET_CART_ITEMS:
            return {
                ...state,
                cartItemList: payload
            }
        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: payload
            }
        default:
            return state
    }
}

export {reducer}