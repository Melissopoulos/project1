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
      <FormLabel component="legend"><h3 className="form-question">What occasion wear are you most interested in?</h3></FormLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={1}>Activewear</MenuItem>
          <MenuItem value={2}>Casualwear</MenuItem>
          <MenuItem value={3}>Lingerie</MenuItem>
          <MenuItem value={4}>Loungewear</MenuItem>
          <MenuItem value={5}>Maternity</MenuItem>
          <MenuItem value={6}>Nightwear</MenuItem>
          <MenuItem value={7}>Swimwear</MenuItem>


        </Select>
      </FormControl>
    </div>
  );
}