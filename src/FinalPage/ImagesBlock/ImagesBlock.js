import React, { useContext, useState } from 'react'
import { ImagesContext } from '../ImagesContext'


import SuggestionImage from './SuggestionImage/SuggestionImage'

import useStyles from './styles'



function SuggestionImages(){

    const classes = useStyles();


    const [images,setImages] = useContext(ImagesContext)

   
   const firstThreeImages=images.slice(0,3)
   const secondThreeImages=images.slice(3,6)
   const thirdThreeImages=images.slice(6,9)



    

    return(
        <div>
            <div className={classes.rowImages}>
                {firstThreeImages.map((image)=>(
                <SuggestionImage src={image.imgUrl} src2={image.afterImgUrl} name={image.name} brand={image.brand} prize={image.prize}/>))}
            </div>
            <div className={classes.rowImages}>
            {secondThreeImages.map((image)=>(
                <SuggestionImage src={image.imgUrl} src2={image.afterImgUrl} name={image.name} brand={image.brand} prize={image.prize}/>))}
            </div>
            <div className={classes.rowImages}>
            {thirdThreeImages.map((image)=>(
                <SuggestionImage src={image.imgUrl} src2={image.afterImgUrl} name={image.name} brand={image.brand} prize={image.prize}/>))}
            </div>
        </div>
    )
}

export default SuggestionImages