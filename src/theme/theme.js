import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#111430",
      yellow: "#fbd062",
      green: "#7ab259",
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        // * defaultProps is like saying: <Container maxWidth="lg"/>
        maxWidth: "lg", //1200px
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
      },
      styleOverrides: {
        root: {
          fontSize: "1rem",
          padding: ".6rem 2.5rem",
        },
      },
    },
  },
});
