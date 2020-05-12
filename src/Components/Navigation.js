import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    width: "85%",
    height: theme.spacing(7),
  },
  toolbar: {
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  },

  search: {
    position: "relative",
    left: "60%",
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
    left: "63%",
  },
  settings: {
    display: "inline",
    position: "relative",
    left: "64%",
  },
}));

export default function Navigation() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">DASHBOARD</Typography>
        <div className={classes.search}>
          <Input placeholder="Search" color="inherit" />
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        </div>
        <IconButton className={classes.notification}>
          <NotificationsNoneIcon />
        </IconButton>
        <IconButton className={classes.settings}>
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
