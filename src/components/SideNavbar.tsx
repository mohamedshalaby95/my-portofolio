import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import * as classes from "../styles/Navbar.module.css";

import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const styleItem = {
  cursor: "pointer",
  textTransform: "upperCase",
  width: "90%",
  padding: "10px",
  marginTop: "1px !important",
  borderRadius: "0px",
  color: "white",
  background: "transparent",
  position: "relative",
  zIndex: "5",
  "&:before": {
    content: `''`,
    position: "absolute",
    left: "0",
    backgroundColor: "#037FFF",
    width: "0",
    top: "0",
    bottom: "0",
    transition: "2s ease-in-out all",
    opacity: ".6",
  },
  "&:hover:before": {
    width: "100%",
  },
};

const SideNavbar = () => {
  return (
    <>
      <Box sx={{ background: "black", height: "100vh" }}>
        <Stack spacing={2} alignItems="center">
          <Avatar
            alt="pesonal image"
            src="/images/shalaby.jpg"
            sx={{ width: 150, height: 150, marginTop: "70px" }}
          />
          <hr className={classes.default.hrStyel} />

          <Item sx={{ ...styleItem, marginTop: "60px !important" }}>
            <Link to="/" style={{ position: "relative", zIndex: 4 }}>
              Home
            </Link>
          </Item>

          <Item sx={styleItem}>
            <Link to="/about">About</Link>
          </Item>
          <Item sx={styleItem}>
            {" "}
            <Link to="/resume"> Resume</Link>
          </Item>
          
          <Item sx={styleItem}>Portfolios</Item>

          <Item sx={{ ...styleItem, marginBottom: "60px !important" }}>
            contact
          </Item>
        </Stack>
        <hr className={classes.default.hrStyel} />
        <footer className={classes.default.sidenavbarFooter}>
          &copy; 2022 SHALABY
        </footer>
      </Box>
    </>
  );
};

export default SideNavbar;
