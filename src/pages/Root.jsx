import { Outlet } from "react-router-dom";
import Appbar from "../Components/Appbar";
import DrawerComponent from "../Components/DrawerComponent";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { grey, teal } from "@mui/material/colors";
const drawerWidth = 240;

export default function Root() {
  const Theme = useTheme();
  // إذا كانت القيمة الموجودة في localStorage هي "dark"، سيتحول mode إلى "dark"، ولكن إذا كانت قيمة أخرى (أو إذا لم تكن موجودة)، سيظل "light".

  const storedTheme = localStorage.getItem("theme");
  const initialMode = storedTheme === "dark" ? "dark" : "light";
  const [mode, setMode] = useState(initialMode);
  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // paletee values for light mode
            wafaa: {
              main: teal[700],
            },
            favColor: {
              main: grey[300],
            },
          }
        : {
            // palette values for dark mode
            wafaa: {
              main: teal[300],
            },
            favColor: {
              main: grey[700],
            },
          }),
    },
  });

  const [check, setCheck] = useState("none");
  const [varient, setVarient] = useState("permanent");

  const showDrawer = () => {
    setCheck("block");
    setVarient("temporary");
  };

  const hideDrawer = () => {
    setCheck("none");
    setVarient("permanent");
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div>
          {/* AppBar */}
          <Appbar drawerWidth={drawerWidth} showDrawer={showDrawer} />

          {/* Drawer == sideBar */}
          <DrawerComponent
            drawerWidth={drawerWidth}
            setMode={setMode}
            check={check}
            varient={varient}
            hideDrawer={hideDrawer}
          />

          {/* outlet */}
          <Box
            component="main"
            sx={{
              [Theme.breakpoints.down("sm")]: {
                ml: "0px",
              },
              display: "flex",
              justifyContent: "center",
              ml: `${drawerWidth}px`,
              mt: "60px",
            }}
          >
            <Outlet />
          </Box>
        </div>
      </ThemeProvider>
    </>
  );
}
