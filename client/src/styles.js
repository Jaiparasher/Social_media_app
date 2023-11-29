import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
   
    appBar: {
        borderRadius: 15 ,
        margin: '30px 0 !important',
        display: 'flex !important',
        flexDirection: 'row !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
      },
      heading: {
        color: 'rgba(0,183,255, 1) !important',
      },
      image: {
        marginLeft: '15px !important',
      },
      "@media (min-width:320px)":{
        mainContainer:{
          flexDirection:'column-reverse'
        }
      },
    })
)