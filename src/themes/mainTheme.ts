import {  createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
/** @type {*} */
 export const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      dark:'#191D2B',
      
    },
    secondary:{
    //  main:'#E2E2E2',
     main:'#A4ACC4',
     

      
    },
    info:{
      main:'#23283C'
    }

  },
});