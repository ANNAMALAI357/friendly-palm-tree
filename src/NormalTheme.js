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
      default: "rgb(71, 78, 104)",
    },
    orangePalette: {
      // dark
      layer1: "rgb(27, 31, 58)",
      layer2: "rgb(83, 53, 74)",
      layer3: "rgb(166, 73, 66)",
      layer4: "rgb(255, 120, 68)",
      // orange
    },
    bluePalette: {
      // dark
      layer1: "rgb(10, 38, 71)",
      layer2: "rgb(20, 66, 114)",
      layer3: "rgb(32, 82, 149)",
      layer4: "rgb(44, 116, 179)",
      // blue
    },
    greyPalette: {
      // dark
      layer1: "rgb(64, 66, 88)",
      layer2: "rgb(71, 78, 104)",
      layer3: "rgb(80, 87, 122)",
      layer4: "rgb(107, 114, 142)",
      // grey
    },
  },
});

NormalTheme = createTheme(NormalTheme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#6b6b6b #2b2b2b",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "transparent",
            width:6,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "rgb(80, 87, 122)",
            minHeight: 24,
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: "#c00000",
          },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
            backgroundColor: "#c00000",
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "rgb(107, 114, 142)",
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2b2b2b",
          },
        },
      },
    },
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
