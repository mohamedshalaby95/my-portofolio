import Box from "@mui/material/Box";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

import * as classes from "../styles/Navbar.module.css";
import "../styles/active.css";
import { styleItem, styleLink, Item } from "../utilities/sideNavbarStyle";

import { Link, useLocation } from "react-router-dom";

const SideNavbar = () => {
  const location = useLocation();

  const getNavLinkClass = (path: string) => {
    return location.pathname === path ? "active" : "";
  };
  return (
    <>
      <Box sx={{ background: "#191D2B", height: "100vh" }}>
        <Stack spacing={2} alignItems="center">
          <Avatar
            alt="pesonal image"
            src="/images/shalaby personal.jpeg"
            sx={{ width: 150, height: 150, marginTop: "70px" }}
          />
          <hr className={classes.default.hrStyel} />

          <Link to="/" style={styleLink}>
            <Item
              className={` ${getNavLinkClass("/") ? "active" : " "} `}
              sx={{ ...styleItem, marginTop: "60px !important" }}
            >
              Home
            </Item>
          </Link>
          <Link to="/about" style={styleLink}>
            <Item
              className={` ${getNavLinkClass("/about") ? "active" : " "} `}
              sx={styleItem}
            >
              About
            </Item>
          </Link>
          <Link to="/resume" style={styleLink}>
            <Item
              className={` ${getNavLinkClass("/resume") ? "active" : " "} `}
              sx={styleItem}
            >
              {" "}
              Resume
            </Item>
          </Link>
          <Link to="/portfolio" style={styleLink}>
            <Item
              className={` ${getNavLinkClass("/portfolio") ? "active" : " "} `}
              sx={styleItem}
            >
              Portfolios
            </Item>
          </Link>
          <Link to="/contact" style={styleLink}>
            <Item
              className={` ${getNavLinkClass("/contact") ? "active" : " "} `}
              sx={styleItem}
            >
              contact
            </Item>
          </Link>
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
