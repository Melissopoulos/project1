import React,{useState} from 'react'
import Gender from './Gender'
import Age from './Age'
import Country from './Country'
import BodyType from './BodyType'
import Fit from './Fit'
import Style from './Style'
import Size from './Size'
import Images from '../questions/Images'
import Brands from '../questions/Brands'
import './Form.css'
import {UserProvider} from './UserContext.js'
import UploadImage from '../questions/UploadImage'



function Form(){

   const [step,setStep] = useState(1)
    

    const nextStep = () =>{
        setStep(step + 1)
    }
    const prevStep = () =>{
        setStep(step - 1)
    }
    

    switch(step){
      case 1: 
        return(
          <UserProvider>
          <div className="page">
            <Gender/>   
            <div className="buttons-div">
               <button className="first-button" onClick={nextStep}>Next</button>
            </div>
          </div> 
          </UserProvider>
        )
      case 2: 
        return(
          <div className="page">
              <Age />
              <div className="buttons-div">
                <button className="buttons" onClick={prevStep}>Prev</button>
                <button className="buttons" onClick={nextStep}>Next</button>
              </div>
          </div>
        )
      case 3: 
        return(
          <div className="page">
            <Country />
            <div className="buttons-div">
                <button className="buttons" onClick={prevStep}>Prev</button>
                <button className="buttons" onClick={nextStep}>Next</button>
              </div>
          </div>
        )
        case 4: 
        return(
          <UserProvider>
          <div className="page">
            <Size />
              <div className="buttons-div">
                <button className="buttons" onClick={prevStep}>Prev</button>
                <button className="buttons" onClick={nextStep}>Next</button>
              </div> 
          </div>
          </UserProvider>
        )
      case 5: 
        return(
          <div className="page">
            <Fit />
              <div className="buttons-div">
                <button className="buttons" onClick={prevStep}>Prev</button>
                <button className="buttons" onClick={nextStep}>Next</button>
              </div> 
          </div>
        )
      case 6: 
        return(
          <UserProvider>
          <div className="page">
            <BodyType />
              <div className="buttons-div">
                <button className="buttons" onClick={prevStep}>Prev</button>
                <button className="buttons" onClick={nextStep}>Next</button>
              </div>
          </div>
          </UserProvider>
        )
      case 7: 
        return(
          <div className="page">
            <Style />
            <div className="buttons-div">
              <button className="buttons" onClick={prevStep}>Prev</button>
              <button className="buttons" onClick={nextStep}>Next</button>
            </div>
          </div>
        )
        case 8: 
        return(
          <div>
            <Images />
            <div className="buttons-images-box">
              <button className="buttons" onClick={prevStep}>Prev</button>
              <button className="buttons" onClick={nextStep}>Next</button>
            </div>
          </div>
        )
        case 9: 
        return(
          <div>
            <Brands />
            <div className="buttons-brands-box">
              <button className="buttons" onClick={prevStep}>Prev</button>
              <button className="buttons" onClick={nextStep}>Next</button>
            </div>
          </div>
        )
        case 10: 
        return(
          <div >
            <UploadImage />
          </div>
        )
       
    }
   
}



export default Form