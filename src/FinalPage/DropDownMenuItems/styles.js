import {makeStyles} from '@material-ui/core/styles'


export default makeStyles((theme)=>({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '58%',
        marginLeft: '30px',
        marginBottom: '40px',
    }
}))