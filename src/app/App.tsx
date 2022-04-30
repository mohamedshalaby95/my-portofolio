import SideNavbar from "../components/SideNavbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import * as classes from "./App.module.css";
import { useCallback, useState } from "react";
import { Box } from "@mui/system";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../themes/mainTheme";
import LineStyle from "../components/LineStyle";
import Resume from "../pages/Resume";

// import { Stack } from "@mui/material";
// import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
  const [statusButton, setStatusButton] = useState<boolean>(false);
  const [toggleNavbar, setToggleNavbar] = useState<number>(-260);
  const [toggleButton, setToggleButton] = useState<number>(0);
  const handelStatusButton = useCallback(() => {
    setStatusButton((oldStatus) => !oldStatus);
    setToggleNavbar((oldState) => (oldState < 0 ? 0 : -260));
    setToggleButton((oldState) => (oldState === 0 ? 260 : 0));
  }, [setStatusButton]);

  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Box className={classes.default.routingComponent}>
          <BrowserRouter>
            <Box
              sx={{ left: `${toggleNavbar}px ` }}
              className={classes.default.sideNavbar}
            >
              <SideNavbar />
            </Box>
            <LineStyle />

            <Box
              sx={{ left: `${toggleButton}px ` }}
              className={classes.default.toggleButton}
            >
              <IconButton aria-label="close" onClick={handelStatusButton}>
                {statusButton ? (
                  <CloseIcon fontSize="large" />
                ) : (
                  <MenuOpenIcon fontSize="large" />
                )}
              </IconButton>
            </Box>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
           
            </Routes>
          </BrowserRouter>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
