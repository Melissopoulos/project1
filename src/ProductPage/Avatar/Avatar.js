import React from 'react'

import video2 from '../../FinalPage/Images/avatarVideos/video2.gif'


import useStyles from './styles'




function Avatar(){
    const classes = useStyles();

    return(
        <div className={classes.avatar}>
          <img src={video2} style={{width:'320px',height:'420px'}}/>
        </div>
    )
}

export default Avatar