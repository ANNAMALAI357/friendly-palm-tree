import { createTheme } from "@mui/material/styles";

let NormalTheme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
    background: {
      default: "#a5a5a5",
    },
    palette1: {
      // dark
      layer1: "rgb(27, 31, 58)",
      layer2: "rgb(83, 53, 74)",
      layer3: "rgb(166, 73, 66)",
      layer4: "rgb(255, 120, 68)",
      // orange
    },
    palette2: {
      // dark
      layer1: "rgb(10, 38, 71)",
      layer2: "rgb(20, 66, 114)",
      layer3: "rgb(32, 82, 149)",
      layer4: "rgb(44, 116, 179)",
      // blue
    },
  },
});

NormalTheme = createTheme(NormalTheme, {
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        dashboard: {
          padding: 0,
        },
      },
    },
  },
});

export default NormalTheme;
