import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import Education from "../components/Education";

import Heading from "../components/Heading";
import Skill from "../components/Skill";
import { IskillsTypeProps } from "../types/skillTypeProps";

const Resume = () => {
  const skills: IskillsTypeProps[] = [
    { skill: "js", percent: 92 },
    { skill: "ts", percent: 70 },
    { skill: "es6", percent: 90 },
    { skill: "html5", percent: 95 },
    { skill: "css3", percent: 91 },
    { skill: "Bootstarp ", percent: 95 },
    { skill: "Responsive Dessign", percent: 95 },
    { skill: "jquery", percent: 80 },
    { skill: "angular 2+", percent: 80 },
    { skill: "reactJs", percent: 85 },
    { skill: "nextJs", percent: 60 },
    { skill: "material ui", percent: 70 },
    { skill: "nodeJs", percent: 85 },
    { skill: "express", percent: 85 },
    { skill: "nestJs", percent: 60 },
    { skill: "mongoDb", percent: 75 },
    { skill: "redux", percent: 75 },
    { skill: "rxjs", percent: 55 },
  ];
  const matchSize = useMediaQuery("(max-width:768px)");

  return (
    <Box
      sx={{ background: "#10121B", overflow: "auto", paddingBottom: "50px" }}
    >
      <Heading value="MY SKILLS" />

      <section className="skills"></section>
      <Container>
        <Grid container sx={{ marginTop: "50px" }}>
          {skills?.map((el) => (
            <Grid
              key={el.skill}
              sx={{ marginTop: "20px" }}
              xs={matchSize ? 12 : 6}
              item
            >
              {" "}
              <Skill
                key={el.skill}
                skill={el.skill}
                percent={el.percent}
              />{" "}
            </Grid>
          ))}
        </Grid>
      </Container>

      <section className="educaion">
        <Heading value="educaion" />

        <Box sx={{ marginTop: "50px", baackground: "green" }}>
          <Education />
        </Box>
      </section>
    </Box>
  );
};

export default Resume;
