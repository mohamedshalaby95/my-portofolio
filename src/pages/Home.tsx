import { Box, Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import useMediaQuery from "@mui/material/useMediaQuery";

const Home = () => {

  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Stack
        sx={{
          height: "100%",
          background: "black url(https://j.gifs.com/KeBY2b.gif)",
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            fontSize: matches ? "2rem" : "3rem",
            fontWeight: "700",
            textAlign: "center !important",
          }}
        >
          Hi, I am{" "}
          <Box
            sx={{
              color: "primary.main",
              display: matches ? "block" : "inline",
            }}
          >
            Mohamed Shalaby
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: matches ? "center" : "center",
            width: matches ? "90%" : "80%",
            color: "secandary.main",
            marginTop: "20px",
            lineHeight: "25px",
            fontWeight: "700",
          }}
        >
          {!matches
            ? ` An enthusiastic software developer with 1+ years of experience 
          who seek an opportunity in the software development field to be part
          in an organization where I can contribute my skills in the
          organization growth.`
            : `   An enthusiastic software developer with 1+ years of experience 
          who seek an opportunity in the software development field to be part
          in an organization where I can contribute my skills in the
          organization growth.`}
        </Box>

        <Stack direction="row" spacing={2} sx={{ marginTop: "50px" }}>
          <a
            style={{ color: "white" }}
            href="https://www.linkedin.com/in/mohamed-shalaby-b3910b194/"
          >
            <LinkedInIcon sx={{ fontSize: "2.5rem" ,position:"relative",zIndex:'10'}} />
          </a>

          <a
            style={{ color: "white" }}
            href="https://github.com/mohamedshalaby95"
          >
            <GitHubIcon sx={{ fontSize: "2.5rem" ,position:"relative",zIndex:'10'}} />
          </a>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
