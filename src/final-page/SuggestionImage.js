import React, { useState } from 'react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Avatar } from 'material-ui';
import avatarFinalPage1 from './images/final-avatar-page1.png'
import avatarFinalPage2 from './images/final-avatar-page2.png'
import avatarFinalPage3 from './images/final-avatar-page3.png'




export default function SuggestionImage(props){

    const avatars = [avatarFinalPage1,avatarFinalPage2,avatarFinalPage3,avatarFinalPage1,avatarFinalPage1,avatarFinalPage1,avatarFinalPage1,avatarFinalPage1,avatarFinalPage1]

    const avatarSelection = (avatar,index) =>{
        return(
            <div>
                <Avatar  src={avatar[index]}/>
            </div>
        )
    }
    return(
        <div className='suggestion-images'>
            <img src={props.src} 
                 style={{width:'220px',height:'220px'}} 
                 onMouseOver={e => (e.currentTarget.src = props.src2)} 
                 onMouseOut={e => (e.currentTarget.src = props.src)}
                 onClick={avatarSelection(avatars[props.index],props.index)} 
                 />
            <div className='icons'>
            <FavoriteBorderIcon />
            <ShoppingCartOutlinedIcon />
            </div>
            
            
        </div>
    )
    
} 