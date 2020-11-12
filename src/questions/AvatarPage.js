import React from 'react'
import './Style.css'
import firstAvatar from './avatar-images/first-avatar.png'
import secondAvatar from './avatar-images/second-avatar.png'


function AvatarPage(){
    return(
        <div>
            <h3 className='form-question-images'>
            Upload a 360 image of yourself <a href=''>click here </a>for instructions
            </h3>
            <div>
                <div className='avatar-image'>
                    <img src={firstAvatar} style={{width:'230px',height:'250px'}}/>
                    <img src={secondAvatar} style={{width:'300px',height:'250px'}}/>
                </div>
                <div className="buttons-avatar-box">
                    <button className="buttons-avatar">Upload my 360 body image</button>
                    <button className="buttons-avatar">I want to use the generic avatars</button>
                </div>
            </div>
        </div>
        
    )
}

export default AvatarPage