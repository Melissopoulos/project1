import React from 'react'

import socialMedia1 from '../Images/SocialMedia/SocialMedia1.jpg'
import socialMedia2 from '../Images/SocialMedia/SocialMedia2.jpg'
import socialMedia3 from '../Images/SocialMedia/SocialMedia3.jpg'
import socialMedia4 from '../Images/SocialMedia/SocialMedia4.jpg'




import useStyles from './styles'


function MediaReel(){
    const classes = useStyles();

    return(
        <div>
          <h2 className={classes.header}>SOCIAL MEDIA REEL</h2>
          <img src={socialMedia1} className={classes.socialMediaImage}/>
          <img src={socialMedia2} className={classes.socialMediaImage}/>
          <img src={socialMedia3} className={classes.socialMediaImage}/>
          <img src={socialMedia4} className={classes.socialMediaImage}/>
        </div>
    )
}

export default MediaReel