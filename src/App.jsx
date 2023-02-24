import { useMemo } from "react";
import { useMediaQuery, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import {themeSetting} from './config/Theme'

function App() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useMemo(
    () => createTheme(themeSetting(isNonMobile)),
    [isNonMobile]
  );

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
