import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';




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

export default function DropDownMenuItems() {

  const classes = useStyles();
  const [category, setCategory] = React.useState('');
  const [brands, setBrands] = React.useState('');
  const [colour, setColour] = React.useState('');
  const [price, setPrice] = React.useState('');


  const [openCategory, setOpenCategory] = React.useState(false);
  const [openBrands, setOpenBrands] = React.useState(false);
  const [openColour, setOpenColour] = React.useState(false);
  const [openPrice, setOpenPrice] = React.useState(false);


  const changeCategory = (e) => {
    setCategory(e.target.value)
  }
  const changeBrands = (e) => {
    setBrands(e.target.value)
  }
  const changeColour = (e) => {
    setColour(e.target.value)
  }
  const changePrice = (e) => {
    setPrice(e.target.value)
  }


  const handleCategoryClose = () => {
    setOpenCategory(false);
  };
  const handleBrandsClose = () => {
    setOpenBrands(false);
  };
  const handleColourClose = () => {
    setOpenColour(false);
  };
  const handlePriceClose = () => {
    setOpenPrice(false);
  };

  const handleCategoryOpen = () => {
    setOpenCategory(true);
  };
  const handleBrandsOpen = () => {
    setOpenBrands(true);
  };
  const handleColourOpen = () => {
    setOpenColour(true);
  };
  const handlePriceOpen = () => {
    setOpenPrice(true);
  };

  return (
    <div className="dropdown-container">
    <div className="dropdown-item-1">
      <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label"><p className='dropdown-label'>Category</p></InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openCategory}
          onClose={handleCategoryClose}
          onOpen={handleCategoryOpen}
          value={category}
          onChange={changeCategory}
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
    <div>
      <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label"><p className='dropdown-label'>Brands</p></InputLabel>     
         <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openBrands}
          onClose={handleBrandsClose}
          onOpen={handleBrandsOpen}
          value={brands}
          onChange={changeBrands}
        >
          <MenuItem name="18-24" value='a'>Gucci</MenuItem>
          <MenuItem name="25-34" value='b'>Louis Vuitton</MenuItem>
          <MenuItem name="35-44" value='c'>Chanel</MenuItem>
          <MenuItem name="45-54" value='d'>Dior</MenuItem>
          <MenuItem name="+54" value='e'>Balenciaga</MenuItem>
          <MenuItem name="18-24" value='a'>Armani</MenuItem>
          <MenuItem name="18-24" value='a'>Yves Saint Laurent</MenuItem>
          <MenuItem name="18-24" value='a'>Burberry</MenuItem>
          <MenuItem name="18-24" value='a'>Hermès</MenuItem>
          <MenuItem name="18-24" value='a'>Prada</MenuItem>
          <MenuItem name="18-24" value='a'>Fendi</MenuItem>
          <MenuItem name="18-24" value='a'>RIXO</MenuItem>
          <MenuItem name="18-24" value='a'>Self-portrait</MenuItem>
          <MenuItem name="18-24" value='a'>Reformation</MenuItem>
          <MenuItem name="18-24" value='a'>Olivia Rubin</MenuItem>
          <MenuItem name="18-24" value='a'>Yasmina Q</MenuItem>
          <MenuItem name="18-24" value='a'>The Odder Side</MenuItem>
          <MenuItem name="18-24" value='a'>Mother of Pearl</MenuItem>
          <MenuItem name="18-24" value='a'>Boyish Jeans</MenuItem>
          <MenuItem name="18-24" value='a'>Misha Nonoo</MenuItem>
          <MenuItem name="18-24" value='a'>Stine Goya</MenuItem>
          <MenuItem name="18-24" value='a'>Stella McCartney</MenuItem>
          <MenuItem name="18-24" value='a'>Veja</MenuItem>


        </Select>
      </FormControl> 
    </div>
    <div>
      <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label"><p className='dropdown-label'>Colour</p></InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openColour}
          onClose={handleColourClose}
          onOpen={handleColourOpen}
          value={colour}
          onChange={changeColour}
        >
          <MenuItem name="18-24" value='a'>Black</MenuItem>
          <MenuItem name="25-34" value='b'>Brown</MenuItem>
          <MenuItem name="35-44" value='c'>Blue</MenuItem>
          <MenuItem name="45-54" value='d'>Clear</MenuItem>
          <MenuItem name="+54" value='e'>Gold</MenuItem>
          <MenuItem name="+54" value='e'>Green</MenuItem>


        </Select>
      </FormControl> 
    </div>
    <div>
      <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label"><p className='dropdown-label'>Price Range</p></InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openPrice}
          onClose={handlePriceClose}
          onOpen={handlePriceOpen}
          value={price}
          onChange={changePrice}
        >
          <MenuItem name="18-24" value='a'>0-100</MenuItem>
          <MenuItem name="25-34" value='b'>100-200</MenuItem>
          <MenuItem name="35-44" value='c'>200-300</MenuItem>
          <MenuItem name="45-54" value='d'>300-500</MenuItem>
          <MenuItem name="+54" value='e'>500+</MenuItem>

        </Select>
      </FormControl> 
    </div>
    </div>
  );
}