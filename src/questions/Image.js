import React,{useState} from 'react'
import './Style.css'


export default function Image(props){
    const [isSelected,setIsSelected]= useState({
        active:false
    });

    const changeSelection = () =>{
        setIsSelected({active:!isSelected.active})
    }

    return(
        <div>
            <img className={isSelected.active ?'suggestion-image-border':'suggestion-image'} src={props.src} onClick={changeSelection}/>
        </div>
    )
    
} 
