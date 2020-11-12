import React,{useState} from 'react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


export default function SuggestionImage(props){

   
   
   

    return(
        <div className='suggestion-images'>
            <img src={props.src} 
                 style={{width:'220px',height:'220px'}} 
                 onMouseOver={e => (e.currentTarget.src = props.src2)} 
                 onMouseOut={e => (e.currentTarget.src = props.src)} />
            <div className='icons'>
            <FavoriteBorderIcon />
            <ShoppingCartOutlinedIcon />
            </div>
        </div>
    )
    
} 