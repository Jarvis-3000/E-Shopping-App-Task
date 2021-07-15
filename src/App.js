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
  const cartState = useSelector(state=>state.cart)
// 
  useEffect(()=>{
    dispatch(cartActions.fetchProducts())
  },[])

  //save the state in localStorage
  // useEffect( ()=>{
  //   console.log("state stored in localStorage")
  //   localStorage.setItem("cartState", JSON.stringify(cartState))
  // },[cartState])

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