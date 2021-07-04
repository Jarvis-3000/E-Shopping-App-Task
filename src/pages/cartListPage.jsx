import React from "react"
import { useSelector, useDispatch } from "react-redux"

import Grid from "@material-ui/core/Grid"
// import Typography from "@material-ui/core/Typography"
import { makeStyles, Button } from "@material-ui/core"

import { Typography } from "@material-ui/core"

import * as cartActions from "../redux/cartRedux/actions"

const useStyles = makeStyles({
    root: {
        width: '100%',
        boxSizing: 'border-box',
        padding: '20px',
        margin: '20px auto',
        maxHeight: '500px',
        overflowY: 'scroll',
        overflowX: 'hidden',

        "&::-webkit-scrollbar": {
            width: 2,
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "darkgrey",
            outline: `1px solid slategrey`,
          }
    },
    container: {
        margin: '0px auto 20px auto',
        borderRadius: '10px',
        boxShadow: '0px 0px 5px 1px #6960EC',
        // padding:'20px 30px'

    }
})


function CartList() {
    const classes = useStyles()
    const { cartList } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleRemoveCartProduct = (id) => {
        dispatch(cartActions.removeCartProduct(id))
    }

    const handleTotalPrice = () => {
        let totalPrice = 0
        cartList.forEach(product => {
            totalPrice += product.quantity * product.price
        })
        return totalPrice
    }

    const handleUpdateQuantity = (product, operation) => {
        dispatch(cartActions.updateQuantity({ product, operation }))
    }

    return (
        <Grid container >
            <Grid container item className={classes.root}>
                <Grid container item spacing={2} direction="column" justify="center" >
                    {
                        cartList.map(product => {
                            return (
                                <Grid container item key={product.id} className={classes.container} direction="row" md={8} lg={5} xl={4} justify="space-around">
                                    <Grid item>
                                        <img src={product.filename} alt={product.title} style={{ height: '200px', width: '180px' }} />
                                    </Grid>

                                    <Grid item container direction="column" xs={10} sm={7} md={7} lg={7} xl={8} spacing={1} style={{ padding: "0px 10px" }} >
                                        <Grid item>
                                            <Typography variant="h5" color="secondary" component="h1" style={{ margin: '0px 0px 20px 0px' }}>{product.title}</Typography>
                                        </Grid>
                                        <Grid item container>

                                            <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                                                <Button variant="contained"
                                                    color="primary"
                                                    onClick={() => {
                                                        (product.quantity > 1) ?
                                                            handleUpdateQuantity(product, "-")
                                                            :
                                                            handleRemoveCartProduct(product)
                                                    }}
                                                >
                                                    <Typography variant="h6" component="span" >-</Typography>
                                                </Button>
                                            </Grid>

                                            <Grid item xs={2} sm={2} md={2} lg={3} xl={3}>
                                                <Typography variant="h6" style={{ textAlign:"center"}}>{product.quantity}</Typography>
                                            </Grid>

                                            <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                                                <Button variant="contained"
                                                    color="primary"
                                                    onClick={() => handleUpdateQuantity(product, "+")}
                                                >
                                                    <Typography variant="h6" component="span">+</Typography>
                                                </Button>
                                            </Grid>
                                        </Grid>

                                        <Grid item>
                                            <Typography variant="h6">${(product.quantity * product.price)}</Typography>
                                        </Grid>

                                        <Grid item>
                                            <Button
                                                variant="contained"
                                                color="default"
                                                size="large"
                                                onClick={() => handleRemoveCartProduct(product)}
                                            >
                                                Remove
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
            <Grid item container justify="center" alignItems="center" direction="column" spacing={3}>
                <Grid item ><Typography variant="h4">Total Payment : {handleTotalPrice().toFixed(2)}</Typography></Grid>
                <Grid item ><Button variant="contained" size="large" fullWidth color="secondary">Checkout</Button></Grid>
            </Grid>
        </Grid>
    )
}

export default CartList

