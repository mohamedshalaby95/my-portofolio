import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Stack, Box } from "@mui/material";
const LineStyle = () => {
  const borderMatches = useMediaQuery("(max-width:1024px)");
  const LineStyle = { borderRight: `.3px solid #E2E2E2`, opacity: ".1" };
  return (
    <div>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        sx={{
          position: "fixed",
          left: borderMatches ? "0" : "252px",
          right: "10px",
          bottom: "0",
          top: "0",
        }}
      >
        <Box sx={LineStyle}></Box>
        <Box sx={LineStyle}></Box>
        <Box sx={LineStyle}></Box>
        <Box sx={LineStyle}></Box>
        <Box sx={LineStyle}></Box>
      </Stack>
    </div>
  );
};

export default LineStyle;
