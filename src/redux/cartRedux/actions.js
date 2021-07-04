import * as actionTypes from "./actionTypes"
import axios from "axios"

export const fetchProducts = () =>{
    return async (dispatch)=>{
        //fetching request...
        dispatch ({type:actionTypes.FETCH_PRODUCTS_REQUEST})

        try{
            const res = await axios.get("https://api4286.s3.ap-south-1.amazonaws.com/products.json")
            console.log("res",{...res})
            dispatch ({type:actionTypes.FETCH_PRODUCTS_SUCCESS,payload:res.data})
        }
        catch(err){
            console.log({...err})
            dispatch ({type:actionTypes.FETCH_PRODUCTS_FAILED})
        }

    }
}

export const showProduct = (payload) =>{
    return {
        type:actionTypes.SHOW_PRODUCT,
        payload
    }
}

export const addToCart = (payload)=>{
    return{
        type:actionTypes.ADD_TO_CART,
        payload
    }
}

export const removeCartProduct = (payload)=>{
    return{
        type:actionTypes.REMOVE_CART_PRODUCT,
        payload
    }
}

export const updateQuantity = (payload)=>{
    console.log("updateQuantity",payload)
    return{
        type:actionTypes.UPDATE_QUANTITY,
        payload
    }
}

export const getPersistedState =(payload)=>{
    return{
        type:actionTypes.GET_PERSISTED_STATE,
        payload
    }
}