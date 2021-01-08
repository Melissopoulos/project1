import React from 'react'

import ProductImages from './ProductImages/ProductImages'
import ProductDetails from './ProductDetails/ProductDetails'
import Avatar from './Avatar/Avatar'


import {Container,Grid} from '@material-ui/core'
import useStyles from './styles'
import MediaReel from './MediaReel/MediaReel'
import SuggestionImages from './SuggestionImages/SuggestionImages'




function ProductPage(){
    const classes = useStyles();
    return(
        <Container>
            <Container>
                <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <ProductImages />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Avatar />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ProductDetails />
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <MediaReel />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <SuggestionImages />
                    </Grid>
                </Grid>
            </Container>
        </Container>
        
    )
}

export default ProductPage