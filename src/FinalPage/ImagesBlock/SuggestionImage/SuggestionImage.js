import React, { useContext, useState } from 'react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {CounterContext} from '../../CounterContext'

import useStyles from './styles'







export default function SuggestionImage(props){

    const classes = useStyles();



    const [counter,setCounter] = useContext(CounterContext);

    const increaseCounter = () =>{
        setCounter(counter + 1);
    }

    
    return(
        <div >
            <img src={props.src} 
                 style={{width:'220px',height:'220px'}} 
                 onMouseOver={e => (e.currentTarget.src = props.src2)} 
                 onMouseOut={e => (e.currentTarget.src = props.src)}
                 onClick = {increaseCounter}
                 />
        
            <div className={classes.icons}>
                <FavoriteBorderIcon />
                <ShoppingCartOutlinedIcon />
            </div>
            <div>
                <h4 className={classes.brand}>{props.brand}</h4>
                <p className={classes.name}>{props.name} </p>
                <p className={classes.prize}>{props.prize}</p>
            </div>
            
            
        </div>
    )
    
} 