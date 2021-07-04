import React from "react"
import { useSelector } from "react-redux"

import Grid from "@material-ui/core/Grid"
// import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core"

import ProductCard from "../productCard/productCard"

const useStyles=makeStyles({
    root:{
        boxSizing:'border-box'
    }
})



function ProductList(){
    const classes=useStyles()
    const {productList} = useSelector(state=>state.cart)

    return(
        <Grid container spacing={3} className={classes.root} justify="flex-start" alignItems="flex-start">
            {
                productList.map(product=>{
                    return (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                            <ProductCard product={product} btnShow={true}/>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default ProductList

