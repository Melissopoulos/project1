import React from 'react'
import './Nav.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import img from './Logo.png'


function Nav(){

 
    return(
    <div className='nav'>
        <img src={img} style={{width:'100px', height:'65'}} alt='logo' />

        <div className='vertical-center'>
        <button className='nav-buttons'>Home</button>
        <button className='nav-buttons'>Contact</button>
        <button className='nav-buttons'>About</button>
        <button className='nav-icon-buttons'><PermIdentityIcon /></button>
        <button className='nav-icon-buttons'><FavoriteBorderIcon /></button>
        <button className='nav-icon-buttons'><ShoppingCartOutlinedIcon /></button>

        </div>
    </div>
    )
}

export default Nav