import React,{useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export default function Gender() {

  const [gender,setGender]= useState('')

  const handleChange = (event) => {
    setGender(event.target.value);
    console.log({gender})
  }
  
 
  return (
    <div>
    <FormControl >
      <FormLabel ><h3 className='form-question'>Tell us your gender</h3></FormLabel>
      <div className="radio">
      <RadioGroup aria-label="gender" name="gender" value={gender} onChange={handleChange}>
        <FormControlLabel value="female"  control={<Radio />} label="Female" />
        <FormControlLabel value="male"  control={<Radio />} label="Male" />
      </RadioGroup>
      </div>
    </FormControl>
    </div>
    
  );
}