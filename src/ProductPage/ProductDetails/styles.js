import {makeStyles} from '@material-ui/core/styles'


export default makeStyles((theme)=>({
    dressName: {
        margin: '15px',
        marginTop:'130px'
    },
    brandName: {
        margin: '20px'
    },
    prize:{
        margin: '20px'
    },
    addToCartButton: {
        paddingLeft: '30px',
        paddingRight: '30px',
        paddingBottom: '10px',
        paddingTop: '10px',
        marginLeft:'15px',
        marginTop:'15px',
        backgroundColor: 'black',
        borderStyle: 'outset',
        borderColor: 'black',
        color: 'white'
    },
    productDetailsButton: {
        paddingLeft: '5px',
        paddingRight: '5px',
        paddingBottom: '1px',
        paddingTop: '1px',
        borderRadius: '25px',
        marginTop: '8px',
        marginLeft: '17px'
       
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectMenu: {
        marginLeft:'10px'
    },
    facebookButton: {
        marginLeft:'18px',
        marginTop:'180px',
        border: '1px solid #ccc',
        backgroundColor: '#3b5998',
        color: 'white',
        fontSize: '10px'
    },
    twitterButton: {
        marginTop:'180px',
        border: '1px solid #ccc',
        backgroundColor: '#1DA1F2',
        color: 'white',
        fontSize: '10px'
    },
    pinterestButton: {
        marginTop:'180px',
        border: '1px solid #ccc',
        backgroundColor: '#c8232c',
        color: 'white',
        fontSize: '10px'
    },
    textField: {
        marginTop: '15px',
        marginLeft: '14px',
        ontFamily: 'Georgia Times New Roman serif',
        fontWeight: 'normal',
        color: '#282828'
    }
    
    

}))