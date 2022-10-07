import React from 'react';
import { Puff }from 'react-loader-spinner';
import { Box } from '@mui/system';


export const Loading = () => {
  return (
    /*Loading...*/
    <Box
        sx={{display:"flex", justifyContent:"center", alignItems:"center"}}
    >
       <Puff color="red" width="100" />
    </Box>
  );
};
