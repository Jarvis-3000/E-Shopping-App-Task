import React from "react"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import ProductList from "../components/productList/productList"

const useStyles = makeStyles({
    root:{
        width:'95%',
        margin:'30px auto',
        padding:'0px'
    }
})
export default function HomePage(){
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={3} direction="column">
                <Grid item>
                    <Typography variant='h3' color="primary">Grab The Products</Typography>
                </Grid>
                <Grid item>
                    <ProductList/>
                </Grid>
                <Grid>
                    {/* Bootom Component */}
                </Grid>
            </Grid>
        </div>
    )
}