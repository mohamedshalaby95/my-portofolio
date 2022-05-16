import { Box, Container, Grid, Stack, useMediaQuery } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { boxStyle, iconStyle, titleContact } from "../utilities/contactUsStyle";

const ContactCard = () => {
  const mobileSize = useMediaQuery("(max-width:426px)");
  return (
    <>
      <Stack sx={{ width: "80%" }}>
        <Box sx={boxStyle}>
          <Grid container>
            <Grid
              item
              xs={mobileSize ? 12 : 2}
              sx={{ textAlign: mobileSize ? "start" : "center" }}
            >
              <AddIcCallIcon
                sx={{ fontSize: mobileSize ? "2rem" : "4rem", ...iconStyle }}
              />
            </Grid>
            <Grid item xs={mobileSize ? 12 : 10}>
              <Stack>
                <Box
                  sx={{
                    ...titleContact,
                    fontSize: mobileSize ? ".8rem" : "1rem",
                  }}
                >
                  Phone
                </Box>
                <Box
                  sx={{
                    fontSize: mobileSize ? ".8rem" : "1rem",
                    fontWeight: "700",
                    marginTop: "5px",
                  }}
                >
                 (+20) 114  857  2460
                </Box>
                <Box
                  sx={{
                    fontSize: mobileSize ? ".8rem" : "1rem",
                    fontWeight: "700",
                    marginTop: "5px",
                  }}
                >
                 (+20) 120  307  9675
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
  
        <Box sx={boxStyle}>
          <Grid container>
            <Grid
              item
              xs={mobileSize ? 12 : 2}
              sx={{ textAlign: mobileSize ? "start" : "center" }}
            >
              <WhatsAppIcon
                sx={{ fontSize: mobileSize ? "2rem" : "4rem", ...iconStyle }}
              />
            </Grid>
            <Grid item xs={mobileSize ? 12 : 10}>
              <Stack>
                <Box
                  sx={{
                    ...titleContact,
                    fontSize: mobileSize ? ".8rem" : "1rem",
                  }}
                >
                  Phone
                </Box>
                <Box
                  sx={{
                    fontSize: mobileSize ? ".8rem" : "1rem",
                    fontWeight: "700",
                    marginTop: "5px",
                  }}
                >
                 (+20) 114  857  2460
                </Box>
               
              </Stack>
            </Grid>
          </Grid>
        </Box>


       



        <Box sx={boxStyle}>
          <Grid container>
            <Grid
              item
              xs={mobileSize ? 12 : 2}
              sx={{ textAlign: mobileSize ? "start" : "center" }}
            >
              <EmailIcon
                sx={{ fontSize: mobileSize ? "2rem" : "4rem", ...iconStyle }}
              />
            </Grid>
            <Grid item xs={10}>
              <Stack>
                <Box
                  sx={{
                    ...titleContact,
                    fontSize: mobileSize ? ".8rem" : "1rem",
                  }}
                >
                  email
                </Box>
                <Box
                  sx={{
                    fontSize: mobileSize ? ".8rem" : "1rem",
                    fontWeight: "700",
                    marginTop: "5px",
                  }}
                >
                  dev.mohamedshalaby@gmail.com
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            backgroundColor: "info.main",
            padding: "30px",
            marginTop: "50px",
            position: "relative",
            zIndex: "5",
            marginBottom: "50px",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={mobileSize ? 12 : 2}
              sx={{ textAlign: mobileSize ? "start" : "center" }}
            >
              <AddLocationIcon
                sx={{ fontSize: mobileSize ? "2rem" : "4rem", ...iconStyle }}
              />
            </Grid>
            <Grid item xs={10}>
              <Stack>
                <Box
                  sx={{
                    ...titleContact,
                    fontSize: mobileSize ? ".8rem" : "1rem",
                  }}
                >
                  address
                </Box>
                <Box
                  sx={{
                    fontSize: mobileSize ? ".8rem" : "1rem",
                    fontWeight: "700",
                    marginTop: "5px",
                  }}
                >
                  Cairo,Egypt
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default ContactCard;
