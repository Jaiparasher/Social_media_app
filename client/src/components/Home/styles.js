import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  searchButton:{
    padding:'2px 1px'
  },
  gridContainer: {
    "@media (min-width:320px)":{
      flexDirection: 'column-reverse',
    },
  },
}));