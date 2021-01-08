import React, { createContext, useState } from 'react'
import image1 from './Images/firstImages/image1.jpeg'
import image2 from './Images/firstImages/image2.jpeg'
import image3 from './Images/firstImages/image3.jpeg'
import image4 from './Images/firstImages/image4.jpeg'
import image5 from './Images/firstImages/image5.jpeg'
import image7 from './Images/firstImages/image7.jpeg'
import image8 from './Images/firstImages/image8.jpeg'
import image10 from './Images/firstImages/image10.png'
import image11 from './Images/firstImages/image11.png'


import afterImage1 from './Images/onHover/after-change-image1.jpeg'
import afterImage2 from './Images/onHover/after-change-image2.jpeg'
import afterImage3 from './Images/onHover/after-change-image3.jpeg'
import afterImage4 from './Images/onHover/after-change-image4.jpeg'
import afterImage5 from './Images/onHover/after-change-image5.jpeg'
import afterImage7 from './Images/onHover/after-change-image7.jpeg'
import afterImage8 from './Images/onHover/after-change-image8.jpeg'
import afterImage10 from './Images/onHover/after-change-image10.png'
import afterImage11 from './Images/onHover/after-change-image11.png'

export const ImagesContext = createContext();

export const ImagesProvider = props => {
    const [images,setImages] = useState([
        {
            name:'Esther Wrap Dress',
            brand:'REISS',
            prize:'€220',
            imgUrl:image1,
            afterImgUrl:afterImage1,
        },
        {
            name:'Esmeralda Coco Dress',
            brand:'REISS',
            prize:'€280',
            imgUrl:image2,
            afterImgUrl:afterImage2,
        },
        {
            name:'Pohshan Midi Dress',
            brand:'DIOR',
            prize:'€200',
            imgUrl:image10,
            afterImgUrl:afterImage10,
        },
        {
            name:'Addison Shift Dress',
            brand:'REISS',
            prize:'€185',
            imgUrl:image4,
            afterImgUrl:afterImage4,
        },
        {
            name:'Amaya Midi Dress',
            brand:'HOBBS',
            prize:'€200',
            imgUrl:image5,
            afterImgUrl:afterImage5,
        },
        {
            name:'Jarley Coccon Dress',
            brand:'PRADA',
            prize:'€220',
            imgUrl:image7,
            afterImgUrl:afterImage7,
        },
        {
            name:'Theresa Midi Dress',
            brand:'ROTATE',
            prize:'€200',
            imgUrl:image8,
            afterImgUrl:afterImage8,
        },
        {
            name:'Thea Midi Dress',
            brand:'RIXO',
            prize:'€250',
            imgUrl:image3,
            afterImgUrl:afterImage3,
        },
        {
            name:'Allison Judith Dress',
            brand:'HOBBS',
            prize:'€230',
            imgUrl:image11,
            afterImgUrl:afterImage11,
        },
        
    ])

    
    return(
        <ImagesContext.Provider value={[images,setImages]}>
            {props.children}
        </ImagesContext.Provider>
    )
}