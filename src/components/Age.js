import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';



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

export default function Age() {

  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    setAge(e.target.value)
    console.log(age)
  }


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
      <FormLabel component="legend"><h3 className="form-question">Select your age range</h3></FormLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem name="18-24" value='a'>18-24</MenuItem>
          <MenuItem name="25-34" value='b'>25-34</MenuItem>
          <MenuItem name="35-44" value='c'>35-44</MenuItem>
          <MenuItem name="45-54" value='d'>45-54</MenuItem>
          <MenuItem name="+54" value='e'>Older than 54</MenuItem>

        </Select>
      </FormControl> 
    </div>
  );
}