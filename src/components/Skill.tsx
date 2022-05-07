import { Box, Grid, LinearProgress, useTheme } from "@mui/material";
import React from "react";
import { IskillsTypeProps } from "../types/skillTypeProps";

const Skill = ({ skill, percent }: IskillsTypeProps) => {
  const theme = useTheme();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= percent) {
          clearInterval(timer);
        }
        const diff = Math.random() * 2;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          fontSize: "2rem",
          fontWeight: "600",
          textTransform: "capitalize",
          marginBottom: "8px",
        }}
      >
        {skill}
      </Box>

      <Grid spacing={4} container  sx={{display:"flex" ,alignItems:"center"}}>
        
        <Grid xs={1} item>
          <Box sx={{ margin: "0px", padding: "0px" }}>{percent + "%"+""+""}</Box>
        </Grid>
        <Grid xs={9} item>
          <LinearProgress
            sx={{
             
              padding: "3px",
              background: `${theme.palette.info.main}`,
              color: `${theme.palette.primary.main}`,
            }}
            value={progress}
            variant="determinate"
          />
        </Grid>
  
      </Grid>
    </Box>
  );
};

export default Skill;
