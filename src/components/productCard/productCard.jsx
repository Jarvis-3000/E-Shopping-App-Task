import React from 'react';
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

import * as cartActions from "../../redux/cartRedux/actions"

const useStyles = makeStyles({
  root: {
    boxShadow:'0px 0px 5px 1px #6960EC'
  },
  media: {
    height: 300,
  },
  typography: {
    margin: '10px 0px'
  }
});

function ProductCard({ product }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleSeeDetails = () => {
    dispatch(cartActions.showProduct(product))
  }

  const handleAddToCart =()=>{
    dispatch(cartActions.addToCart(product))
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.filename}
          title="ProductImage"
        />

        <CardContent >
          <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography >
          <Typography variant="body2" color="secondary" component="p" className={classes.typography}>
            {`$${product.price}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
            <Rating name="read-only" value={product.rating} readOnly style={{ margin: '0px 0px 0px -2px' }} />
          </Typography>

        </CardContent>

      </CardActionArea>
          <CardActions>
            <Link to="/product"
              style={{ textDecoration: "none" }}
              onClick={handleSeeDetails}
            >
              <Button size="small" color="primary" variant="outlined" >
                See Details
              </Button>
            </Link>
            <Button size="small" color="primary" variant="outlined"  onClick={handleAddToCart}>
              Add To Cart
            </Button>
          </CardActions>
    </Card>
  );
}

export default ProductCard