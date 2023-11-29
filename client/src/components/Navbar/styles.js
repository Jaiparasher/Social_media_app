import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row !important',
    justifyContent: 'space-between !important',
    alignItems: 'center !important',
    padding: '10px 50px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column !important',
    },
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300,
  },
  image: {
    marginLeft: '10px',
    marginTop: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end !important',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto !important',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between !important',
    width: '400px',
    alignItems: 'center !important',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
  },
  userName: {
    display: 'flex !important',
    alignItems: 'center !important',
    textAlign: 'center !important',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center !important',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));