import React from 'react'
import './FinalPage.css'





function Avatar(props){
    
    return(
        <div className='grid-item-2'>
           <img src={props.src} style={{width:'320px',height:'420px'}}/>
        </div>
    )
  
   
}

export default Avatar