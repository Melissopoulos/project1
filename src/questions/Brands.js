import React,{useState} from 'react'
import Brand from './Brand'
import allsaints from './brand-logos/allsaints.png'
import balenciaga from './brand-logos/balenciaga.png'
import bennett from './brand-logos/bennett.png'
import dior from './brand-logos/dior.png'
import fendi from './brand-logos/fendi.png'
import ganni from './brand-logos/ganni.png'
import kenzo from './brand-logos/kenzo.png'
import massimodutti from './brand-logos/massimodutti.png'
import offwhite from './brand-logos/offwhite.png'
import realisation from './brand-logos/realisation.png'
import reform from './brand-logos/reform.png'
import zimmermann from './brand-logos/zimmermann.png'
import self from './brand-logos/self.png'
import lulemon from './brand-logos/lulemon.jpg'
import reiss from './brand-logos/reiss.jpg'
import rixo from './brand-logos/rixo.png'
import rotate from './brand-logos/rotate.png'
import salvatore from './brand-logos/salvatore.png'
import zara from './brand-logos/zara.png'
import './Style.css'

function Brands(){
    const [brands,setBrands]=useState([
        massimodutti,zimmermann,offwhite,realisation,lulemon,reform,fendi,kenzo,bennett,allsaints,balenciaga,salvatore
    ])
    const firstThreeBrands = brands.slice(0,4);
    const secondThreeBrands = brands.slice(4,8);
    const thirdThreeBrands= brands.slice(8,12);


    return(
    <div>
        <h2 className='form-question-images'>
             Where do you typically shop - select 5 brands below        
        </h2>
        <div className='brand-box'>
            <div className='row-images'>
                {firstThreeBrands.map((brand)=>(<Brand src={brand}/>))}
            </div>
            <div className='row-images'>
                {secondThreeBrands.map((brand)=>(<Brand src={brand}/>))}
            </div>
            <div className='row-images'>
                {thirdThreeBrands.map((brand)=>(<Brand src={brand}/>))}
            </div>
        </div>
    </div>
    )
}

export default Brands