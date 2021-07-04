import React from "react"
import { useSelector, useDispatch } from "react-redux"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import Rating from '@material-ui/lab/Rating';

import * as cartActions from "../redux/cartRedux/actions"

const useStyles = makeStyles({
    root: {
        width: '100%',
        margin: '50px 0px',
        padding: '10px',
        
    },
    container:{
        border:'2px solid',
        borderRadius:'10px',
        padding:'5px'
        
    },
    image: {
        backgroundSize: 'cover',
        height: '500px'
    },
    detailsContainer: {
        padding: '20px 30px',
        position: 'relative',
        background: 'powderblue',
    }
})

export default function ProductShow() {
    const classes = useStyles()
    const { product } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleAddToCart =()=>{
        dispatch(cartActions.addToCart(product))
    }

    return (
        <Grid container className={classes.root} justify="space-around">
            <Grid item container xs={12} sm={10} md={8} lg={8} xl={8} className={classes.container}>
                <Grid item  xs={12} sm={5} md={6} lg={6} justify="center" className={classes.image}
                        style={
                            { backgroundImage: `url('${product.filename}')`, }
                        }>
                </Grid>
                {/*  */}
                <Grid item container xs sm md lg xl className={classes.detailsContainer} direction="column" >
                    <Grid item xs>
                        <Typography variant="h4" color="primary" style={{ margin: '0px 0px 20px 0px' }}>
                            {product.title}
                        </Typography>
                        <Typography variant="h5" style={{ margin: '0px 0px 20px 0px' }}>
                            Type : {product.type}
                        </Typography>
                        <Typography variant="h5" style={{ margin: '0px 0px 20px 0px' }}>
                            {product.description}
                        </Typography>
                        <Typography variant="h5" style={{ margin: '0px 0px 20px 0px' }}>
                            <Rating name="read-only" value={product.rating} readOnly />
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Button 
                            variant="contained" 
                            size="large" 
                            fullWidth 
                            color="secondary"
                            onClick={handleAddToCart}
                        >
                            Add To Cart
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}
