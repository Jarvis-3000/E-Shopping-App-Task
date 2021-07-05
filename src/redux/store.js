import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import logger from "redux-logger"

import rootReducer from "./rootReducer"

const middlewares=[]

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger)
}

console.log("I am in store")

export const store=createStore(rootReducer,applyMiddleware(thunk, ...middlewares))

export default store
