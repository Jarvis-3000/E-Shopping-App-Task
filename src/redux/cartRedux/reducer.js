import * as actionTypes from "./actionTypes"
import { addItemToCart, quantityChange } from "./utils"

const INITIAL_STATE = {
    productList: [],
    cartList: [],
    product: {},
    fetchState: ''
}

export default function cartReducer(state = INITIAL_STATE, action) {


    switch (action.type) {

        case actionTypes.GET_PERSISTED_STATE:
            {
                const { productList, cartList, product, fetchState } = action.payload
                return {
                    ...state,
                    productList,
                    cartList,
                    product,
                    fetchState
                }
            }

        case actionTypes.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                fetchState: 'fetching'
            }

        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                productList: action.payload
            }

        case actionTypes.FETCH_PRODUCTS_FAILED:
            return {
                ...state,
                fetchState: 'failed'
            }

        case actionTypes.SHOW_PRODUCT:
            return {
                ...state,
                product: action.payload
            }

        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cartList: addItemToCart(state.cartList, action.payload)
            }

        case actionTypes.UPDATE_QUANTITY:

            //don't update the array rather return new updated array
            return {
                ...state,
                cartList: quantityChange(state.cartList, action.payload.product, action.payload.operation)
            }

        case actionTypes.REMOVE_CART_PRODUCT:
            
            return {
                ...state,
                cartList:state.cartList.filter(product => product.id !== action.payload.id)
            }

        default:
            return state
    }
}