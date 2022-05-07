import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import ImageDailog from "./ImageDailog";

const CaptionAbout = () => {
  const matchMediaQuery = useMediaQuery("(max-width:768px)");
  return (
    <>
      <Container sx={{ marginTop: "50px" }}>
        <Grid container spacing={2}>
          <Grid item xs={matchMediaQuery ? 12 : 6}>
            <ImageDailog />
          </Grid>
          <Grid item xs={matchMediaQuery ? 12 : 6} sx={{display:'flex',alignItems:"center"}}>
            <Box>
            <Typography variant="h5" component={"h5"}>
              I am{" "}
              <Box
                sx={{
                  fontSize: "1.8rem",
                  fontWeight: "900",
                  display: "inline",
                  color: "primary.main",
                }}
              >
                Mohamed Shalaby{" "}
              </Box>{" "}
            </Typography>
            <Stack>
              <Typography
                sx={{
                  color: "secondary.main",
                  textAlign: "start",
                  fontSize: "1rem",
                  marginTop: "50px",
                }}
                variant="h5"
                component={"h5"}
              >
                I am a full stack web developer. I can provide clean code ,My
                mother tongue as a developer is Javascript and Typescript
                languages, and my proficient stack is MEARN .
              </Typography>
              <Container>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <Typography
                      variant="h5"
                      component={"h5"}
                      sx={{
                        marginTop: "50px",
                        color: "secondary.main",
                        fontSize: "1rem",
                        textAlign: "start",
                      }}
                    >
                      FullName
                    </Typography>
                    <Typography
                      variant="h5"
                      component={"h5"}
                      sx={{
                        marginTop: "10px",
                        color: "secondary.main",
                        fontSize: "1rem",
                        textAlign: "start",
                      }}
                    >
                      Age
                    </Typography>
                    <Typography
                      variant="h5"
                      component={"h5"}
                      sx={{
                        marginTop: "10px",
                        color: "secondary.main",
                        fontSize: "1rem",
                        textAlign: "start",
                      }}
                    >
                      Nationality
                    </Typography>
                    <Typography
                      variant="h5"
                      component={"h5"}
                      sx={{
                        marginTop: "10px",
                        color: "secondary.main",
                        fontSize: "1rem",
                        textAlign: "start",
                      }}
                    >
                      Language
                    </Typography>
                    <Typography
                      variant="h5"
                      component={"h5"}
                      sx={{
                        marginTop: "10px",
                        color: "secondary.main",
                        fontSize: "1rem",
                        textAlign: "start",
                      }}
                    >
                      Address
                    </Typography>
                    <Typography
                      variant="h5"
                      component={"h5"}
                      sx={{
                        marginTop: "10px",
                        color: "secondary.main",
                        fontSize: "1rem",
                        textAlign: "start",
                      }}
                    >
                      FreeLance
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography
                      variant="h5"
                      component={"h5"}
                      sx={{
                        marginTop: "50px",
                        color: "secondary.main",
                        fontSize: "1rem",
                        textAlign: "start",
                        width: "100% !important",
                      }}
                    >
                      : Mohamed Elsayed shalaby
                    </Typography>
                    <Typography
                      variant="h5"
                      component={"h5"}
                      sx={{
                        marginTop: "10px",
                        color: "secondary.main",
                        fontSize: "1rem",
                        textAlign: "start",
                      }}
                    >
                      : 25
                    </Typography>
                    <Typography
                      variant="h5"
                      component={"h5"}
                      sx={{
                        marginTop: "10px",
                        color: "secondary.main",
                        fontSize: "1rem",
                        textAlign: "start",
                      }}
                    >
                      : Egyption
                    </Typography>
                    <Typography
                      variant="h5"
                      component={"h5"}
                      sx={{
                        marginTop: "10px",
                        color: "secondary.main",
                        fontSize: "1rem",
                        textAlign: "start",
                      }}
                    >
                      : Arabic &amp;&amp; English
                    </Typography>
                    <Typography
                      variant="h5"
                      component={"h5"}
                      sx={{
                        marginTop: "10px",
                        color: "secondary.main",
                        fontSize: "1rem",
                        textAlign: "start",
                      }}
                    >
                      : Cairo Egypt
                    </Typography>
                    <Typography
                      variant="h5"
                      component={"h5"}
                      sx={{
                        marginTop: "10px",
                        color: "secondary.main",
                        fontSize: "1rem",
                        textAlign: "start",
                      }}
                    >
                      : Avaliable
                    </Typography>
                  </Grid>
                  
                </Grid>
              </Container>
            </Stack>
            <Button
              onClick={() => {
                window.open(
                  "assets/Mohamed Elsayed Shalaby Software Engineering-1-2.pdf",
                  "_blank"
                );
              }}
              variant="contained"
              sx={{
                marginTop: "50px",
                padding: "15px 30px",
                borderRadius: "none",
              }}
            >
              Download Resume
            </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CaptionAbout;
