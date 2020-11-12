import React, { useContext } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {UserContext} from './UserContext'




export default function BodyType(props) {

  const [user,setUser] = useContext(UserContext);
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  if(user.gender==='female'){
    return (
    <div>
       
         <FormControl component="fieldset">
         <FormLabel component="legend"><h3 className='form-question'>Select your Body type</h3></FormLabel>
         <div className='radio'>
         <RadioGroup aria-label="body" name="body1" value={value} onChange={handleChange}>
           <FormControlLabel value="1" control={<Radio />} label="Pear shaped" />
           <FormControlLabel value="2" control={<Radio />} label="Hour glass" />
           <FormControlLabel value="3" control={<Radio />} label="Apple" />
           <FormControlLabel value="4" control={<Radio />} label="Rectangle" />
           <FormControlLabel value="5" control={<Radio />} label="Round" />
         </RadioGroup>
         </div>
       </FormControl>
      </div>
       )
      }
  else{
    return(
      <div>
      <FormControl component="fieldset">
      <FormLabel component="legend"><h3 className='form-question'>Select your Body type</h3></FormLabel>
      <div className='radio'>
       <RadioGroup aria-label="body" name="body1" value={value} onChange={handleChange}>
          <FormControlLabel value="6" control={<Radio />} label="Triangle" />
          <FormControlLabel value="7" control={<Radio />} label="Muscular" />
          <FormControlLabel value="8" control={<Radio />} label="Oval" />
          <FormControlLabel value="9" control={<Radio />} label="Broad" />
          <FormControlLabel value="10" control={<Radio />} label="Column" />
      </RadioGroup>
      </div>
      </FormControl>
      </div>
    )
  }
    

    
}