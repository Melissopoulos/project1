import React,{useContext} from 'react'

import video1 from '../Images/avatarVideos/video1.gif'
import video2 from '../Images/avatarVideos/video2.gif'

import {CounterContext} from '../CounterContext'
import useStyles from './styles'

import { useHistory } from "react-router-dom";

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';








function AvatarContainer(){
  const classes = useStyles();

    const [counter,setCounter] = useContext(CounterContext);

    const history = useHistory();

    function handleClick() {
      history.push('/productpage');
    }  
    
    
    switch(counter){
        case 0: 
          return(
            <div >
              <img src={video1} style={{width:'320px',height:'420px'}}/>
            </div>
              )
        case 1: 
          return(
            <div >
              <img src={video2} style={{width:'320px',height:'420px'}}/>
              <div className={classes.divForButtons}>
                <button className={classes.iconButton} ><FavoriteBorderIcon style={{fontSize:13}}/></button>
                <button className={classes.iconButton} ><ShoppingCartOutlinedIcon style={{fontSize:13}} /></button>
                <button className={classes.productButton}
                      onClick={handleClick}
                      >GO TO PRODUCT
                </button>
              </div>
            </div>
            )
          }
   
}

export default AvatarContainer