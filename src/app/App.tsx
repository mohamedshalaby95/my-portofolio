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
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";



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
      <Box className="App" >
        <Box className={classes.default.routingComponent} >
          <BrowserRouter>
            <Box
              sx={{ left: `${toggleNavbar}px ` }}
              className={classes.default.sideNavbar}
            >
              <SideNavbar />
            </Box>
          

            <Box
              sx={{ left: `${toggleButton}px ` }}
              className={classes.default.toggleButton}
            >
              <IconButton aria-label="close" onClick={handelStatusButton}>
                {statusButton ? (
                  <CloseIcon fontSize="large"   sx={{color:"white"}}/>
                ) : (
                  <MenuOpenIcon fontSize="large" sx={{color:"white"}} />
                )}
              </IconButton>
            </Box>
            <Box sx={{position:"relative"}}>
            <LineStyle />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            
            </Box>
          </BrowserRouter>
        </Box>
      </Box>
    </ThemeProvider>

  );
}

export default App;
