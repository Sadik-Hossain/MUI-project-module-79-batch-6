import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#111430",
      yellow: "#fbd062",
      green: "#7ab259",
    },
    components: {
      MuiContainer: {
        defaultProps: {
          // * defaultProps is like saying: <Container maxWidth="lg"/>
          maxWidth: "lg", //1200px
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        /* 
        //* The theme's styleOverrides key makes it possible to potentially change every single style injected by Material UI into the DOM. This is useful if you want to apply a fully custom design system to Material UI's components.
        https://mui.com/material-ui/customization/theme-components/#global-style-overrides
        */
        root: {
          fontSize: "1rem",
          padding: ".6rem 2.5rem",
        },
      },
      defaultProps: {
        /* 
        defaultProps is like saying: 
        <Button 
         variant: "contained",
         color: "primary",
         />
        */
        variant: "contained",
        color: "primary",
      },
    },
  },
});
