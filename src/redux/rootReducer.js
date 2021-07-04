import {combineReducers} from "redux"

//reducers
import cartReducer from "./cartRedux/reducer"


const rootReducer=combineReducers({
    cart:cartReducer
})

export default rootReducer