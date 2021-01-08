import React from 'react'
import DropDownMenuItems from './DropDownMenuItems/DropDownMenuItems'
import ImagesBlock from './ImagesBlock/ImagesBlock'
import AvatarContainer from './Avatar/AvatarContainer'
import {CounterProvider} from './CounterContext'
import useStyles from './styles'
import {Container,Grid} from '@material-ui/core'
import { ImagesProvider } from './ImagesContext'



function FinalPage(){
    const classes = useStyles();
    return(
        <ImagesProvider>
        <CounterProvider>
            <Container>
                <DropDownMenuItems />
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <ImagesBlock />
                        </Grid>
                        <Grid className={classes.avatarGrid} item xs={12} sm={4}>
                            <AvatarContainer />
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        
        </CounterProvider>
        </ImagesProvider>
    )
}

export default FinalPage