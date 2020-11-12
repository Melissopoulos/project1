import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import {UserContext} from './UserContext'




const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Size() {
  const [user,setUser] = useContext(UserContext);


  const classes = useStyles();
  const [size, setSize] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    setSize(e.target.value)
  }


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

 
  if(user.gender==='female'){

  return (
    <div>
      <FormControl className={classes.formControl}>
      <FormLabel component="legend"><h3 className="form-question">What size are you?</h3></FormLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={size}
          onChange={handleChange}
        >
          <MenuItem name="UK4" value='UK4'>UK4</MenuItem>
          <MenuItem name="UK6" value='UK6'>UK6</MenuItem>
          <MenuItem name="UK8" value='UK8'>UK8</MenuItem>
          <MenuItem name="UK10" value='UK10'>UK10</MenuItem>
          <MenuItem name="UK12" value='UK12'>UK12</MenuItem>
          <MenuItem name="UK14" value='UK14'>UK14</MenuItem>
          <MenuItem name="UK16" value='UK16'>UK16</MenuItem>
          <MenuItem name="UK18" value='UK18'>UK18</MenuItem>
          <MenuItem name="UK20" value='UK20'>UK20</MenuItem>
          <MenuItem name="UK20" value='UK20'>UK22</MenuItem>
          <MenuItem name="UK20" value='UK20'>UK24</MenuItem>

        </Select>
      </FormControl> 
      </div>
    )}
    else{
      return(
      <div>
        <FormControl className={classes.formControl}>
        <FormLabel component="legend"><h3 className="form-question">What size are you?</h3></FormLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={size}
            onChange={handleChange}
          >
            <MenuItem name="XS" value='XS'>XS</MenuItem>
            <MenuItem name="S" value='S'>S</MenuItem>
            <MenuItem name="M" value='M'>M</MenuItem>
            <MenuItem name="L" value='L'>L</MenuItem>
            <MenuItem name="XL" value='XL'>XL</MenuItem>
            <MenuItem name="XXL" value='XXL'>XXL</MenuItem>
            
          </Select>
        </FormControl> 
        </div>
        )
    }
}