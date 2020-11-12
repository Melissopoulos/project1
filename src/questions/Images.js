import React, { useState } from 'react'
import Image from './Image'
import yellow from './style-images/yellow.jpg'
import anniston from './style-images/anniston.jpg'
import megan from './style-images/megan.jpg'
import flower from './style-images/flower.jpg'
import french from './style-images/french.jpg'
import goth from './style-images/goth.jpg'
import dress from './style-images/dress.jpg'
import jean from './style-images/jean.jpg'
import kate from './style-images/kate.jpg'
import millie from './style-images/millie.jpg'
import victoria1 from './style-images/victoria1.jpg'
import victoria2 from './style-images/victoria2.jpg'

function Images(){
    const [images,setImages]=useState([
      yellow,anniston,megan,flower,french,goth,dress,jean,kate,millie,victoria1,victoria2
    ])
    const firstThreeImages = images.slice(0,4);
    const secondThreeImages = images.slice(4,8);
    const thirdThreeImages = images.slice(8,12);


    return(
    <div>
        <h2 className='form-question-images'>
            Select 3 looks from below, that best describe your style.
        </h2>
        <div className='image-box'>
            <div className='row-images'>
                {firstThreeImages.map((image)=>(<Image src={image}/>))}
            </div>
            <div className='row-images'>
                {secondThreeImages.map((image)=>(<Image src={image}/>))}
            </div>
            <div className='row-images'>
                {thirdThreeImages.map((image)=>(<Image src={image}/>))}
            </div>
        </div>
    </div>
    )
}

export default Images