import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function CustomAppBar({title}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
          <center>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            {title}
          </Typography>
          </center>

      </AppBar>
    </Box>
  );
}