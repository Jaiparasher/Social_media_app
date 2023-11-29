import { makeStyles } from "@mui/styles";


export default makeStyles((theme) => ({
  paper: {
    marginTop: `${theme.spacing(8)} !important`,
    display: 'flex !important',
    flexDirection: 'column  !important',
    alignItems: 'center !important',
    padding:`${theme.spacing(2)} !important`,
  },
  root: {
    '& .MuiTextField-root': {
      margin: `${theme.spacing(1)} !important`,
    },
  },
  avatar: {
    margin:  `${theme.spacing(1)} !important`,
    backgroundColor:`${theme.palette.secondary.main} !important`,
  },
  form: {
    width: '100% !important', // Fix IE 11 issue.
    marginTop: `${theme.spacing(3)} !important`,
  },
  submit: {
    margin: `${theme.spacing(2,0)} !important`,
  },
  googleButton: {
    display: 'flex !important',
    alignItems: 'center !important',
    width:'100% !important',
    marginBottom: `${theme.spacing(1)} !important`,
    justifyContent:'center'
  },
}));