import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#99a4f8",
      main: "#001bee",
      dark: "#00108f",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f19999",
      main: "#dd0000",
      dark: "#850000",
      contrastText: "#2c0000",
    },
  },
  typography: {
    fontFamily: '"poppins", sans-serif', // Replace "Your Font Name" with your desired font family
  },
});

export default theme;
