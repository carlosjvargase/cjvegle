import { Box } from '@mui/material';
import React from 'react';

export const Footer = () => {
  return (
    /*Footer*/
    <Box sx={{backgroundColor:"#F2F2F2", fontSize:"14px", paddingBottom:"6px", paddingTop:"1px"}}>
        {/*Cjvegle*/}
        <Box component={"a"} href={'https://www.carlosjvargase.com'} target={"_blank"} sx={{border:"1px solid #BFBFBF", textDecoration:"none", border:"none", ml:2, fontWeight:"bold", color:"black", textTransform:"none"}}>Cjvegle Inc.</Box>
        {/*Hr*/}
        <Box sx={{border:"1px solid #BFBFBF"}}></Box>
        {/*Description*/}
        <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:"2px"}}>
            <Box sx={{display:"flex", flexDirection:"row", gap:"15px", ml:2, paddingTop:"2px", cursor:"pointer", color:"#A6A6A6"}}>
                <Box>
                About
                </Box>
                <Box>
                Advertising
                </Box>
                <Box>
                Business
                </Box>
                <Box>
                How Search works
                </Box>
            </Box>
            <Box sx={{display:"flex", flexDirection:"row", gap:"15px", mr:2,paddingTop:"2px", cursor:"pointer", color:"#A6A6A6"}}>
                <Box>
                Privacy
                </Box>
                <Box>
                Terms
                </Box>
                <Box>
                Settings
                </Box>
            </Box>
        </Box>
    </Box>
  );
};

