import { Box, makeStyles, Paper, Typography, useTheme } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import EditOffIcon from "@mui/icons-material/EditOff";
import ConstructionIcon from "@mui/icons-material/Construction";

const AboutCard = () => {
  const theme = useTheme();
  const papperStyle={
    backgroundColor: "primary.dark",
    color: "white",
    borderTop: `10px solid ${theme.palette.info.main} `,
    transitionProperty: "all",
    transitionTimingFunction: "ease-in-out",
    "&:hover": {
      borderTop: `10px solid ${theme.palette.primary.main} `,
      transitionProperty: "all",
      transitionDuration: "1s",
    }
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",

          "& > :not(style)": {
            m: 1,
            width: 400,
            height: 250,
          },
        }}
      >
        <Paper
          sx={papperStyle}
          elevation={3}
        >
          <CodeIcon
            sx={{
              color: "primary.main",
              fontWeight: "700",
              fontSize: "3rem",
              marginLeft: "20px",
              marginTop: "20px",
            }}
          />
          <Typography
            sx={{ marginLeft: "20px" }}
            component={"h5"}
            variant={"h5"}
          >
            Web Development
          </Typography>
          <div
            style={{
              width: "70px",
              marginTop: "10px",
              border: "solid",
              marginLeft: "20px",
              borderColor: "#23283C",
              opacity: "-moz-initial.6",
            }}
          ></div>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "1rem",
              marginTop: "20px",
              marginLeft: "20px",
              marginRight: "20px",
            }}
            component={"h6"}
            variant={"h6"}
          >
            I have strong knowledge of Javascript ES5, ES6, and also TypeScript.
            I'm always enthusiastic about JS and its frameworks .
          </Typography>
        </Paper>
        <Paper
          sx={papperStyle}
          elevation={3}
        >
          <EditOffIcon
            sx={{
              color: "primary.main",
              fontWeight: "700",
              fontSize: "3rem",
              marginLeft: "20px",
              marginTop: "20px",
            }}
          />
          <Typography
            sx={{ marginLeft: "20px" }}
            component={"h5"}
            variant={"h5"}
          >
            Responsive Web Design
          </Typography>
          <div
            style={{
              width: "70px",
              marginTop: "10px",
              border: "solid",
              marginLeft: "20px",
              borderColor: "#23283C",
              opacity: "-moz-initial.6",
            }}
          ></div>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "1rem",
              marginTop: "20px",
              marginLeft: "20px",
              marginRight: "20px",
            }}
            component={"h6"}
            variant={"h6"}
          >
            Responsive Web Design always plays an important role whenever going
            to promote your website.
          </Typography>
        </Paper>

        <Paper
          sx={papperStyle}
          elevation={3}
        >
          <ConstructionIcon
            sx={{
              color: "primary.main",
              fontWeight: "700",
              fontSize: "3rem",
              marginLeft: "20px",
              marginTop: "20px",
            }}
          />
          <Typography
            sx={{ marginLeft: "20px" }}
            component={"h5"}
            variant={"h5"}
          >
            Maintain Web Site
          </Typography>
          <div
            style={{
              width: "70px",
              marginTop: "10px",
              border: "solid",
              marginLeft: "20px",
              borderColor: "#23283C",
              opacity: "-moz-initial.6",
            }}
          ></div>
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "1rem",
              marginTop: "20px",
              marginLeft: "20px",
              marginRight: "20px",
            }}
            component={"h6"}
            variant={"h6"}
          >
            Keeping a website well maintained and attractive is important to
            companies big and small in order to engage and retain customers.
          </Typography>
        </Paper>

        {/* <p>Responsive Web Design always plays an important role whenever going to promote your website.</p> */}
      </Box>
    </>
  );
};

export default AboutCard;
