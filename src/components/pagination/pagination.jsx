import React from "react"

import { makeStyles } from '@material-ui/core/styles';
import BoxPagination from '@material-ui/lab/Pagination';
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Pagination({handleCardsPerPage, totalPages}) {
  const classes = useStyles();

  const [size, setSize] = React.useState("medium")

 const updateWidthAndHeight = ()=>{
   if(window.innerWidth<400){
     setSize("small")
   }
   else if(window.innerWidth<700){
    setSize("medium")
  }
   else{
     setSize("large")
   }
 }

useEffect(()=>{
  window.addEventListener("resize",updateWidthAndHeight)

  return () => window.removeEventListener("resize", updateWidthAndHeight);
})
    

  return (
    <div className={classes.root} >
      <BoxPagination 
        count={totalPages} 
        color="secondary" 
        size={size}
        onChange={handleCardsPerPage}
      />
    </div>
  );
}
