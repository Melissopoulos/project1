import {makeStyles} from '@material-ui/core/styles'


export default makeStyles(()=>({
    productButton: {
        backgroundColor: 'rgb(24, 23, 23)',
        color: 'white',
        marginLeft:'5px',
        paddingLeft:'10px',
        paddingRight: '10px',
        paddingTop: '5px',
    },
    iconButton: {
        color:'white',
        alignItems: 'center',
        backgroundColor:'rgb(24, 23, 23)',
        marginLeft:'2px',
        paddingLeft:'8px',
        paddingRight: '8px',
        paddingTop: '4px'
    },
    divForButtons: {
        marginTop: '45px',
        marginLeft:'45px'
    }

}))