import React,{useState} from 'react'
import './Style.css'


export default function Brand(props){
    const [isSelected,setIsSelected]= useState({
        active:false
    });

    const changeSelection = () =>{
        setIsSelected({active:!isSelected.active})
    }

    return(
        <div>
            <img className={isSelected.active ?'suggestion-brand-border':'suggestion-brand'} src={props.src} onClick={changeSelection}/>
        </div>
    )
    
} 
