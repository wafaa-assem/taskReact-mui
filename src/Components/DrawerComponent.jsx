import { Divider, Drawer, useTheme, IconButton, Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

export default function DrawerComponent({
  drawerWidth,
  setMode,
  check,
  varient,
  hideDrawer,
}) {
  const navigate = useNavigate();
  const Theme = useTheme();
  // console.log(Theme);             // obj has all default theme
  const curruntLocation = useLocation();

  // array list
  const items = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Create", icon: <CreateIcon />, path: "/create" },
    { text: "Profile", icon: <PersonIcon />, path: "/profile" },
    { text: "Setting", icon: <SettingsIcon />, path: "/setting" },
  ];
  return (
    <Box component="nav">
      <Drawer
        sx={{
          // display:{xs:"none" , sm:"block"} ,

          [Theme.breakpoints.down("sm")]: {
            display: check,
          },

          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={varient}
        anchor="left"
        open={true}
        onClose={() => {
          hideDrawer();
        }}
      >
        <List>
          <ListItem disablePadding>
            <IconButton
              color="inherit"
              sx={{ m: "auto", display: "flex", mb: "15px" }}
              onClick={() => {
                // Theme.palette.mode -----> 1- light             onClick ? dark
                localStorage.setItem(
                  "theme",
                  Theme.palette.mode == "light" ? "dark" : "light"
                );
                setMode(Theme.palette.mode == "light" ? "dark" : "light");
              }}
            >
              {Theme.palette.mode == "light" ? (
                <Brightness4Icon />
              ) : (
                <Brightness7Icon sx={{ color: "orange" }} />
              )}
            </IconButton>
          </ListItem>
          <Divider />
          {items.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                bgcolor:
                  curruntLocation.pathname == item.path &&
                  Theme.palette.favColor.main,
              }}
            >
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {" "}
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
