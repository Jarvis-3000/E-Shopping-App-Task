import React, {useEffect} from "react"
import {Route} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import localforage from "localforage";


//components
import Header from "./components/header/header"
import HomePage from "./pages/homePage"
import ProductShow from "./pages/productShowPage"
import CartList from "./pages/cartListPage"

import * as cartActions from "./redux/cartRedux/actions"

const localStore = localforage.createInstance({});

function App(){

  const dispatch = useDispatch()
  const state = useSelector(state=>state.cart)

  useEffect(()=>{
    dispatch(cartActions.fetchProducts())
    const state = JSON.parse(localStorage.getItem("state"))
    // .then(state=>{
      if(state){
        dispatch(cartActions.getPersistedState(state))
        console.log({...state})
      }
      else{
        alert("no local data")
        // dispatch(cartActions.getPersistedState({productList:[],cartList:[],prodtct:{},fetchState:''}))
      }
    // })
  },[])

  //save the state in localStorage
  useEffect( ()=>{
    console.log("state stored in localStorage")
    localStorage.setItem("state", JSON.stringify(state))
  },[state])

  return (
    <div style={{ overflow: 'hidden', padding:'0px', margin:'0px'}}>
      <Header/>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/product" component={ProductShow}></Route>
      <Route exact path="/cart" component={CartList}></Route>
    </div>
  )
}

export default App