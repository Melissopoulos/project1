import React, { useState } from 'react'

import image1 from './images/image1.jpeg'
import image2 from './images/image2.jpeg'
import image3 from './images/image3.jpeg'
import image4 from './images/image4.jpeg'
import image5 from './images/image5.jpeg'
import image6 from './images/image6.jpeg'
import image7 from './images/image7.jpeg'
import image8 from './images/image8.jpeg'
import image9 from './images/image9.jpeg'
import afterImage1 from './images/after-change-image1.jpeg'
import afterImage2 from './images/after-change-image2.jpeg'
import afterImage3 from './images/after-change-image3.jpeg'
import afterImage4 from './images/after-change-image4.jpeg'
import afterImage5 from './images/after-change-image5.jpeg'
import afterImage6 from './images/after-change-image6.jpeg'
import afterImage7 from './images/after-change-image7.jpeg'
import afterImage8 from './images/after-change-image8.jpeg'
import afterImage9 from './images/after-change-image9.jpeg'




import SuggestionImage from './SuggestionImage'


function SuggestionImages(){

   const displayImages =[image1,image2,image3,image4,image5,image6,image7,image8,image9]
   const afterMouseOverImages=[afterImage1,afterImage2,afterImage3,afterImage4,afterImage5,afterImage6,afterImage7,afterImage8,afterImage9]
   
   const firstThreeImages=displayImages.slice(0,3)
   const secondThreeImages=displayImages.slice(3,6)
   const thirdThreeImages=displayImages.slice(6,9)

   const afterMouseOverImages1=afterMouseOverImages.slice(0,3)
   const afterMouseOverImages2=afterMouseOverImages.slice(3,6)
   const afterMouseOverImages3=afterMouseOverImages.slice(6,9)

    

    return(
        <div>
            <div className='row-images'>
                {firstThreeImages.map((image1,index)=>(
                <SuggestionImage src={image1} src2={afterMouseOverImages1[index]}/>))}
            </div>
            <div className='row-images'>
            {secondThreeImages.map((image1,index)=>(
                <SuggestionImage src={image1} src2={afterMouseOverImages2[index]}/>))}
            </div>
            <div className='row-images'>
            {thirdThreeImages.map((image1,index)=>(
                <SuggestionImage src={image1} src2={afterMouseOverImages3[index]}/>))}
            </div>
        </div>
    )
}

export default SuggestionImages