import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import { Iproject } from "../types/project";

const PortfolioCard = ({ srcImg, name, demoLink, sourceCode,technologies }: Iproject) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          padding: "5px",
          background: "black",
          position: "relative ",
          marginTop: "50px",

          zIndex: "0",
          cursor: "pointer",
          "&:hover  .layer-caption": {
            left: "40px",
            transition: "all 1s ",
          },
        }}
      >
        <CardMedia
          component="img"
          height="200px"
          image={srcImg}
          alt="Paella dish"
          sx={{
            padding: "5px",
          }}
        />
        <CardContent sx={{ color: "white", position: "relative", zIndex: "0" }}>
          <Typography
            sx={{ textTransform: "uppercase" }}
            variant="h6"
            component={"h6"}
          >
            {name}
          </Typography>
        </CardContent>
        <Stack
          className="layer-caption"
          sx={{
            position: "absolute",
            bottom: "30%",
            left: "-290px",
            background: "white",
            width: "80%",
            height: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 1s ",
          }}
        >
          <Box>

          <Button
            variant="contained"
            sx={{
              background: "black",
              marginRight: "3px",
              "&:hover": {
                background: "info.main",
                transition: "all 1s",
              },
            }}
            onClick={() => {
              window.open(`${demoLink}`);
            }}
          >
            View Demo
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "black",
              "&:hover": {
                background: "info.main",
                transition: "all 1s",
              },
            }}
            onClick={() => {
              window.open(`${sourceCode}`);
            }}
          >
            Source Code{" "}
          </Button>
          </Box>
          <Box sx={{fontSize:'1.2rem',fontWeight:'900',marginTop:'4px'}}>
            Technologies Used
          </Box>
          <Box sx={{fontSize:'1rem',fontWeight:'900',marginTop:'4px',textAlign:'center'}}>
           {technologies}
          </Box>
        </Stack>
      </Card>
    </>
  );
};

export default PortfolioCard;
