import {
  Box,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import { NavLink, Outlet } from "react-router-dom";
import { useTheme } from "@emotion/react";

function Sideabar() {
  const theme = useTheme();
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="stretch">
      <Grid item xs={12} sm={12} md={3} lg={2.5} xl={1.75}>
        <List>
          <ListItemButton
            component={NavLink}
            to="/"
            style={({ isActive }) => {
              return {
                mb: 1,
                borderRadius: "12px",
                backgroundColor: isActive
                  ? theme.palette.bluePalette.layer4
                  : theme.palette.bluePalette.layer3,
                border: isActive
                  ? `2px solid ${theme.palette.background.default}`
                  : `2px solid transparent`,
                outline: isActive
                  ? `2px solid ${theme.palette.bluePalette.layer4}`
                  : `2px solid transparent`,
              };
            }}>
            <ListItemIcon>
              <AllInboxIcon />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              primaryTypographyProps={{ sx: { color: "white" } }}
            />
          </ListItemButton>
          <ListItemButton
            component={NavLink}
            to="/page-1"
            sx={{
              my: 1,
            }}
            style={({ isActive }) => {
              return {
                mb: 1,
                borderRadius: "12px",
                backgroundColor: isActive
                  ? theme.palette.bluePalette.layer4
                  : theme.palette.bluePalette.layer3,
                border: isActive
                  ? `2px solid ${theme.palette.background.default}`
                  : `2px solid transparent`,
                outline: isActive
                  ? `2px solid ${theme.palette.bluePalette.layer4}`
                  : `2px solid transparent`,
              };
            }}>
            <ListItemIcon>
              <AllInboxIcon />
            </ListItemIcon>
            <ListItemText
              primary="Page 1"
              primaryTypographyProps={{ sx: { color: "white" } }}
            />{" "}
          </ListItemButton>
          <ListItemButton
            component={NavLink}
            to="/page-2"
            sx={{
              my: 1,
            }}
            style={({ isActive }) => {
              return {
                mb: 1,
                borderRadius: "12px",
                backgroundColor: isActive
                  ? theme.palette.bluePalette.layer4
                  : theme.palette.bluePalette.layer3,
                border: isActive
                  ? `2px solid ${theme.palette.background.default}`
                  : `2px solid transparent`,
                outline: isActive
                  ? `2px solid ${theme.palette.bluePalette.layer4}`
                  : `2px solid transparent`,
              };
            }}>
            <ListItemIcon>
              <AllInboxIcon />
            </ListItemIcon>
            <ListItemText
              primary="Page 2"
              primaryTypographyProps={{ sx: { color: "white" } }}
            />
          </ListItemButton>
          <ListItemButton
            component={NavLink}
            to="/page-3"
            sx={{
              my: 1,
            }}
            style={({ isActive }) => {
              return {
                mb: 1,
                borderRadius: "12px",
                backgroundColor: isActive
                  ? theme.palette.bluePalette.layer4
                  : theme.palette.bluePalette.layer3,
                border: isActive
                  ? `2px solid ${theme.palette.background.default}`
                  : `2px solid transparent`,
                outline: isActive
                  ? `2px solid ${theme.palette.bluePalette.layer4}`
                  : `2px solid transparent`,
              };
            }}>
            <ListItemIcon>
              <AllInboxIcon />
            </ListItemIcon>
            <ListItemText
              primary="Page 3"
              primaryTypographyProps={{ sx: { color: "white" } }}
            />
          </ListItemButton>
        </List>
      </Grid>
      <Grid item xs={12} sm={12} md={8.5} lg={9} xl={10} sx={{ m: 1 }}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default Sideabar;
