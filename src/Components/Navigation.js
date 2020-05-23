import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import ResponsiveDrawer, { drawerWidth } from "./ResponsiveDrawer";

const useStyles = makeStyles((theme) => ({
  appbar: {
    height: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  toolbar: {
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    position: "relative",
    left: `calc(100% - ${drawerWidth + 260}px)`,
    backgroundColor: "#DFDED8",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(0.5),
  },
  searchIcon: {
    display: "inline",
    verticalAlign: "bottom",
  },
  notification: {
    display: "inline",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      left: `calc(100% - ${drawerWidth + 235}px)`,
    },
    [theme.breakpoints.down("md")]: {
      left: `calc(100% - ${drawerWidth + 35}px)`,
    },
  },
  settings: {
    display: "inline",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      left: `calc(100% - ${drawerWidth + 225}px)`,
    },
    [theme.breakpoints.down("md")]: {
      left: `calc(100% - ${drawerWidth + 20}px)`,
    },
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">DASHBOARD</Typography>
          <Hidden only={["xs", "sm", "md"]}>
            <div className={classes.search}>
              <Input placeholder="Search" />
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
            </div>
          </Hidden>
          <IconButton className={classes.notification}>
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton className={classes.settings}>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <ResponsiveDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </div>
  );
}
