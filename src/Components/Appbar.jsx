import {
  AppBar,
  Avatar,
  Link,
  Toolbar,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import img from "./../assets/i.jpeg";
import MenuIcon from "@mui/icons-material/Menu";

export default function Appbar({ drawerWidth, showDrawer }) {
  const Theme = useTheme();

  return (
    <>
      <AppBar
        position="static"
        sx={{
          [Theme.breakpoints.up("sm")]: {
            ml: `${drawerWidth}px`,
            width: `calc(100% - ${drawerWidth}px)`,
          },
        }}
      >
        <Toolbar>
          <IconButton
            sx={{ color: "inherit", mr: "6px" }}
            onClick={() => {
              showDrawer();
            }}
          >
            <MenuIcon
              sx={{
                [Theme.breakpoints.up("sm")]: {
                  display: "none",
                },
              }}
            />
          </IconButton>

          <Link
            href="/"
            underline="none"
            color="inherit"
            sx={{ flexGrow: 1, "&:hover": { fontSize: "17px" } }}
          >
            My expenses
          </Link>

          <Typography variant="body1" color="inherit">
            Wafaa Assem
          </Typography>
          <Avatar
            sx={{ width: 35, height: 35, ml: "5px" }}
            alt="Wafaa Assem"
            src={img}
          />
        </Toolbar>
      </AppBar>
    </>
  );
}
