import CaptionAbout from "../components/CaptionAbout";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Heading from "../components/Heading";
import AboutCard from "../components/AboutCard";
import { Box } from "@mui/material";

const About = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div style={{ background: "black", overflow: "auto" }}>
      <header>
        <Heading value="about me" />
      </header>
      <section>
        <CaptionAbout />
      </section>
      <section className="service">
        <Heading value="services" />
        <Box sx={{ marginTop: "50px" ,position:'relative',zIndex:2 ,marginBottom:'50px' }}>
          <AboutCard />
        </Box>
      </section>
    </div>
  )
};

export default About;
