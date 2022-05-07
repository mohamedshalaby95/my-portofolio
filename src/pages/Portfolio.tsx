import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import PortfolioCard from "../components/PortfolioCard";

import { Iproject } from "../types/project";

const Portfolio = () => {
  const theme = useTheme();
  const projects: Iproject[] = [
    {
      srcImg: "images/examjs.png",
      name: "examenation system",
      demoLink: "https://mohamedshalaby95.github.io/examenation-system-by-js/",
      sourceCode:
        "https://github.com/mohamedshalaby95/examenation-system-by-js",
      technologies: "Pure Js Bootstap 5 Html 5 css3",
    },
    {
      srcImg: "images/responsiveTemplete.png",
      name: "responsive templete",
      demoLink: "https://mohamedshalaby95.github.io/ResponsiveTemplate/",
      sourceCode: "https://github.com/mohamedshalaby95/ResponsiveTemplate",
      technologies: "Js Jquery Bootstap 5 Html 5 css3",
    },
    {
      srcImg: "images/onePage.png",
      name: "Kerri",
      demoLink: "https://bootstrap4-project-96973.firebaseapp.com",
      sourceCode: "https://github.com/mohamedshalaby95/Kerri",
      technologies: "Bootstap 4 Html 5 css3",
    },
    {
      srcImg: "images/bezel.png",
      name: "bezel",
      demoLink: "https://jquery-multi-section.firebaseapp.com/",
      sourceCode:
        " https://github.com/mohamedshalaby95/jquery-project-resposive-design",
      technologies: "Js Jquery Bootstap 4 Html 5 css3",
    },
    {
      srcImg: "images/airbnb.png",
      name: "airbnb clone",
      demoLink: "https://airbnb-clone-front.web.app",
      sourceCode: " https://github.com/mohamedshalaby95/-Back-Mern-AirBnb",
      technologies: "Reactjs material ui react-bootstrap Html 5 css3",
    },
  ];
  return (
    <Box
      sx={{ background: "#10121B", overflow: "auto", paddingBottom: "50px" }}
    >
      <Container>
        <Grid
          container
          sx={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={2}
        >
          {projects?.map((el) => (
            <Grid
              key={el.srcImg}
             
              item
            >
              {" "}
              <PortfolioCard
                srcImg={el.srcImg}
                name={el.name}
                demoLink={el.demoLink}
                sourceCode={el.sourceCode}
                technologies={el.technologies}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
