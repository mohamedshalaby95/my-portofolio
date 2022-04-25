import SideNavbar from "../components/SideNavbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import * as classes from "./App.module.css";
import { useCallback, useState } from "react";
import { Box } from "@mui/system";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "../components/Home";

function App() {
  const [statusButton, setStatusButton] = useState<boolean>(false);
  const [toggleNavbar, setToggleNavbar] = useState<number>(-260);
  const [toggleButton, setToggleButton] = useState<number>(0);
  const handelStatusButton = useCallback(() => {
    console.log(toggleNavbar);
    setStatusButton((oldStatus) => !oldStatus);
    setToggleNavbar((oldState) => (oldState < 0 ? 0 : -260));
    setToggleButton((oldState) => (oldState === 0 ? 260 : 0));
  }, [setStatusButton]);
 
  return (
    <Box className="App">
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
            <CloseIcon fontSize="large" />
          ) : (
            <MenuOpenIcon fontSize="large" />
          )}
        </IconButton>
      </Box>
      <Box className={classes.default.routingComponent}>
        
        <BrowserRouter>
      
          <Routes>
          
            <Route index element={<Home />} />
          </Routes>

        
        </BrowserRouter>
        ,
      </Box>
    </Box>
  );
}

export default App;
