import React from 'react'

import useStyles from './styles'


import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import { black } from 'material-ui/styles/colors';
import { Facebook ,Twitter} from 'react-feather';
import { FaPinterestP } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';

import Button  from '@material-ui/core/Button';




function ProductDetails(){
    const classes = useStyles();

    const [size, setSize] = React.useState('UK8');
    const [openText,setOpenText] = React.useState(false);

    const changeSize = (e) => {
        setSize(e.target.value)
    };
    const changeOpenText = () =>{
        setOpenText(!openText);
    }
    

    return(
        <div>
           <h2 className={classes.dressName}>Pohshan Midi Dress</h2>
           <p className={classes.brandName}>DIOR</p>
           <h3 className={classes.prize}>€200</h3>
           <div className={classes.selectMenu}>
           <FormControl variant="outlined" className={classes.formControl}>
            <FormLabel><p style={{color:black}}>Select Size</p></FormLabel>
            <Select
            value={size}
            onChange={changeSize}
            label="Size"
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
           <div>
               <button className={classes.addToCartButton}>ADD TO CART</button>
           </div>
           <div>
               <button className={classes.productDetailsButton} onClick={changeOpenText}>DETAILS <BiChevronDown /></button>
               {openText ? <p className={classes.textField}>Ever the show-stopper, our classic Rose has been updated in time for party season in a gorgeous gold leaf palm made from gold foil. Guaranteed to light up any room, she's perfectly cut to flatter every figure, hugging in all the right places and gliding effortlessly over curves. Her cut out back and ruffled front split are guaranteed to steal the show, so prepare to turn some heads.
                <br/><br/><b>Details</b><br/><br/>•Midi Dress<br/><br/>•V-Neck<br/><br/>•Open Back<br/><br/>•Long Sleeves<br/><br/>•Ruffle Details<br/><br/>•Partly Lined<br/><br/>•51% Silk, 49% Cupro
                          </p> : null}
           </div>
           <div>
           <Button className={classes.facebookButton}><Facebook fill='white' size={18}/> SHARE</Button>
           <Button className={classes.twitterButton}><Twitter fill='white' size={18}/> TWEET</Button>
           <Button className={classes.pinterestButton}><FaPinterestP  size={18}/> PIN IT</Button>


           </div>
        </div>
    )
}

export default ProductDetails