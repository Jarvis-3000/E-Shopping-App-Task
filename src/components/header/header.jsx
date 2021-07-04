import React, {useState} from "react"
import {Link} from "react-router-dom"
import { useSelector } from "react-redux"

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import {makeStyles} from "@material-ui/core/styles"

import Logo from "../../assets/images/logo.png"
import BagSvg from "../../assets/images/bagSvg.svg"
import { useEffect } from "react"

const useStyles = makeStyles({
    root:{
        boxSizing:'border-box',
        background:'#6960EC',
        padding:'0px 20px',
        margin:'auto',
        marginBottom:'10px',
    }
})

function Header() {

    const classes=useStyles()
    const [totalItems, setTotalItems]=useState(0)
    const {cartList} = useSelector(state=>state.cart)


    useEffect(()=>{
        let total=0
        cartList.forEach(product=>{
            total+=Number(product.quantity)
        })
        setTotalItems(total)
    },[cartList])
    return (
        <div className={classes.root}>
            <Grid container  justify="space-between" direction="row">
            <Grid item container xs={2} justify="flex-start" alignItems="center" direction="row" >
                <Grid item >
                    <img src={Logo} alt="logo" style={{width:"70px", height:"70px", marginRight:"10px"}}/>
                </Grid>
            </Grid>

            <Grid item container xs spacing={3} justify="flex-end" alignItems="center" direction="row" >
                <Grid item>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <Button variant="contained" size="large" color="secondary">Home</Button>
                    </Link>
                </Grid>
                <Grid item style={{cursor:"pointer",textDecoration:"none"}}>
                        <Link to="/cart" style={{cursor:"pointer",textDecoration:"none",position:"relative"}}>
                            <img src={BagSvg} alt="bagLogo" style={{width:"50px", height:"50px"}}/>
                            <span style={{width:'40px',position:"absolute",left:"5px",top:"-13px",textAlign:'center', fontSize:"20px",color:'white'}}>
                                {totalItems}
                            </span>
                        </Link>
                </Grid>
            </Grid>
        </Grid>
        </div>
    )
}

export default Header