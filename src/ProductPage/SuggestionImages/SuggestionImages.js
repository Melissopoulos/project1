import React from 'react'

import afterImage5 from '../../FinalPage/Images/onHover/after-change-image5.jpeg'
import afterImage2 from '../../FinalPage/Images/onHover/after-change-image2.jpeg'
import afterImage7 from '../../FinalPage/Images/onHover/after-change-image7.jpeg'
import afterImage8 from '../../FinalPage/Images/onHover/after-change-image8.jpeg'








import useStyles from './styles'


function SuggestionImages(){
    const classes = useStyles();

    return(
        <div>
          <h2 className={classes.header}>YOU MAY ALSO LIKE</h2>
          <img src={afterImage5} className={classes.suggestionImages}/>
          <img src={afterImage2} className={classes.suggestionImages}/>
          <img src={afterImage7} className={classes.suggestionImages}/>
          <img src={afterImage8} className={classes.suggestionImages}/>
          
        </div>
    )
}

export default SuggestionImages