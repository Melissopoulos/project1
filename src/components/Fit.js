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

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
      <FormLabel component="legend">
        <h3 className='form-question'>
        What part of your body do you like to show the least?
        </h3>
      </FormLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Arms</MenuItem>
          <MenuItem value={20}>Shoulders</MenuItem>
          <MenuItem value={30}>Legs</MenuItem>
          <MenuItem value={40}>Back</MenuItem>
          <MenuItem value={50}>Boobs</MenuItem>
          <MenuItem value={60}>Midriff</MenuItem>
          <MenuItem value={60}>I don’t have a problem area</MenuItem>


        </Select>
      </FormControl>
    </div>
  );
}