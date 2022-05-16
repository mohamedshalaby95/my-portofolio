
import useMediaQuery from "@mui/material/useMediaQuery";
import { Stack, Box } from "@mui/material";
const LineStyle = () => {

  const LineStyle = { border: `.3px solid #E2E2E2`, opacity: ".1" };
  
  return (
    <div>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        sx={{
          position: "absolute",
          
          bottom: "0",
          top: "0",
          left:"50px",
          right:"50px",
          
       
         
        
      
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
