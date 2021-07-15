import React from "react"
import { useSelector } from "react-redux"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import ProductList from "../components/productList/productList"
import Pagination from "../components/pagination/pagination"

const useStyles = makeStyles({
    root:{
        width:'95%',
        margin:'30px auto',
        padding:'0px'
    }
})
export default function HomePage(){
    const classes = useStyles()

    const {productList} = useSelector(state=>state.cart)
    const listLength = productList.length

    const [currentPage, setCurrentPage] = React.useState(1)
    const [cardsPerPage, setCardsPerPage] = React.useState(4)

    const totalPages = Math.ceil(listLength/cardsPerPage) 
    // console.log(listLength, cardsPerPage, totalPages)

    const handleCardsPerPage = (event, value)=>{
        console.log(value)
        setCurrentPage(value)
    }

    const firstCardNumber = currentPage*cardsPerPage - cardsPerPage
    const lastCardNumber = firstCardNumber+cardsPerPage

    return (
        <div className={classes.root}>
            <Grid container spacing={3} direction="column">
                <Grid item container direction="row" justify="space-between" >
                    <Grid>
                        <Typography variant='h3' color="primary">Grab The Products</Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <ProductList firstCardNumber={firstCardNumber} lastCardNumber={lastCardNumber}/>
                </Grid>
                <Grid container item justify="center">
                    <Grid>
                        <Pagination handleCardsPerPage={handleCardsPerPage} totalPages={totalPages}/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}