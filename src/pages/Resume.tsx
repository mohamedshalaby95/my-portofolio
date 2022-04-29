import { Box } from '@mui/material';
import React from 'react';
import Heading from '../components/Heading';

const Resume = () => {
    return (
        <Box sx={{background:'black',height:'100vh',overflow:'auto'}}>
          <Heading value='resume' />
        </Box>
    );
};

export default Resume;