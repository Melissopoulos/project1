import React,{useState} from 'react'

import image1 from '../Images/image1.png'
import image2 from '../Images/image2.png'
import image3 from '../Images/image3.png'
import useStyles from './styles'




function ProductImages(){
    const classes = useStyles();
    const [counter,setCounter] = useState(0);

    const increaseCounter = () =>{
        setCounter(counter + 1);
    }
    const initializeCounter = () =>{
        setCounter(0);
    }

    switch(counter){
        case 0: 
        return(
            <div className={classes.imagesContainer}>
               <img src={image3} className={classes.imageStyle} onClick = {increaseCounter}/> 
            </div>
        )
        case 1: 
        return(
            <div className={classes.imagesContainer}>
               <img src={image2} className={classes.imageStyle} onClick = {increaseCounter}/> 
            </div>
        )
        case 2: 
        return(
            <div className={classes.imagesContainer}>
               <img src={image1} className={classes.imageStyle} onClick = {initializeCounter}/> 
            </div>
        )

    }

    return(
        <div className={classes.imagesContainer}>
           <img src={image3} className={classes.imageStyle}/>
           
        </div>
    )
}

export default ProductImages