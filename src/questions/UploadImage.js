import React,{useState} from 'react'
import './Style.css'
import Link from '@material-ui/core/Link';
import firstAvatar from './avatar-images/avatar1.png'
import secondAvatar from './avatar-images/avatar2.png'
import thirdAvatar from './avatar-images/avatar3.png'
import { useHistory } from "react-router-dom";


function UploadImage(){
    const history = useHistory();

    function handleClick() {
      history.push('/finalpage');
    }  
    return(
        <div>
            <h3 className='upload-image-question'>
            Upload a 360 image of yourself or Select one of the generic avatars below
            </h3>
            <div className='avatar-image'>
                    <img src={firstAvatar} style={{width:'200px',height:'250px'}}/>
                    <img src={secondAvatar} style={{width:'220px',height:'258px'}}/>
                    <img src={thirdAvatar} style={{width:'200px',height:'250px'}}/>
            </div>
            <div className="buttons-upload-image-box">
                    <button className="buttons-avatar" onClick={handleClick}>Upload my image</button>
                    <button className="buttons-avatar">Use a generic avatar</button>
            </div>
            <div className='link-for-instructions'>
            <Link href="/" variant="body2">
                Click here for instructions 
            </Link>
            </div>
        </div>
        
    )
}

export default UploadImage