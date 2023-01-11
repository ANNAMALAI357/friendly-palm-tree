import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";
import { useTheme } from "@emotion/react";

function AppHeader() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, backgroundColor:theme.palette.background.default }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" component="div">
            Ver 2
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 1, height:"92vh" }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default AppHeader;
