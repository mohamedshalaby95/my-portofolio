import { Box } from "@mui/material";
import React from "react";
import { Iheading } from "../types/heading";

const Heading = ({ value }: Iheading) => {
  const headStyle = {
    marginTop: "120px",
    textTransform: "upperCase",
    marginLeft: "20px",
    fontSize: "3rem",
    position: "relative",
    textShadow: "40px 40px  2px  rgba(229, 232, 236,.1)",
    "&:after": {
      content: `''`,
      position: "absolute",
      bottom: "-15px",
      left: "0",
      width: "100px",
      height: "5px",

      backgroundColor: "primary.dark",
      borderRadius: "2PX",
    },
    "&:before": {
      content: `''`,
      position: "absolute",
      bottom: "-15px",
      left: "0",
      width: "40px",
      height: "5px",
      zIndex: "5",
      backgroundColor: "primary.main",
      borderRadius: "2PX",
    },
  };
  return (
    <div>
      <Box sx={{ ...headStyle }}>{value}</Box>
    </div>
  );
};

export default Heading;
