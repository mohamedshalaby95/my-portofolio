import { Box, Container, Grid, Stack, useMediaQuery } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from '@mui/icons-material/Email';
import AddLocationIcon from '@mui/icons-material/AddLocation';

const ContactCard = () => {
    const mobileSize = useMediaQuery("(max-width:426px)");
  return (
    <>
    <Stack sx={{width:'80%'}}>
      <Box sx={{backgroundColor:'info.main',padding:'30px',marginTop:'50px',position:'relative',zIndex:'5'}}>
          <Grid container>

        <Grid  item xs={mobileSize?12:2} sx={{textAlign:mobileSize?'start':"center"}}>
          <WhatsAppIcon  sx={{fontSize:'4rem',border:"1px solid #23283C",padding:'7px',background:"#191D2B"}}/>
        </Grid>
        <Grid  item   xs={mobileSize?12:10} >
          <Stack>
            <Box sx={{textTransform:"capitalize",fontSize:'1.2rem',fontWeight:'700'}}>Phone</Box>
            <Box sx={{fontSize:'1rem',fontWeight:'700',marginTop:'5px'}}>+02-011-4857-2460</Box>
          </Stack>
        </Grid>
          </Grid>
      </Box>

      <Box sx={{backgroundColor:'info.main',padding:'30px',marginTop:'50px',position:'relative',zIndex:'5'}}>
          <Grid container>

        <Grid  item xs={mobileSize?12:2} sx={{textAlign:mobileSize?'start':"center"}}>
          <EmailIcon  sx={{fontSize:'4rem',border:"1px solid #23283C",padding:'7px',background:"#191D2B"}}/>
          
        </Grid>
        <Grid  item xs={10}>
          <Stack>
            <Box sx={{textTransform:"capitalize",fontSize:'1.2rem',fontWeight:'700'}}>email</Box>
            <Box sx={{fontSize:'1rem',fontWeight:'700',marginTop:'5px'}}>mohamedshalaby19595@gmail.com</Box>
          </Stack>
        </Grid>
          </Grid>
      </Box>

      <Box sx={{backgroundColor:'info.main',padding:'30px',marginTop:'50px',position:'relative',zIndex:'5',marginBottom:'50px'}}>
          <Grid container>

        <Grid item xs={mobileSize?12:2} sx={{textAlign:mobileSize?'start':"center"}}>
          <AddLocationIcon  sx={{fontSize:'4rem',border:"1px solid #23283C",padding:'7px',background:"#191D2B"}}/>
          
        </Grid>
        <Grid  item xs={10}>
          <Stack>
            <Box sx={{textTransform:"capitalize",fontSize:'1.2rem',fontWeight:'700'}}>address</Box>
            <Box sx={{fontSize:'1rem',fontWeight:'700',marginTop:'5px'}}>Cairo,Egypt</Box>
          </Stack>
        </Grid>
          </Grid>
      </Box>

    </Stack>

      
    </>
  );
};

export default ContactCard;
