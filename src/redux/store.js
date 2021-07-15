import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger)
}

let cartState = JSON.parse(localStorage.getItem('cartState'))
? JSON.parse(localStorage.getItem('cartState'))
	: {
			productList: [],
			cartList: [],
			product: {},
			fetchState: '',
	  }

const initialState = {
	cart: cartState,
}

export const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk, ...middlewares))
)

export default store