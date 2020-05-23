import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles, useTheme } from "@material-ui/core/styles";

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  // necessary for content to be below app bar

  toolbar: {
    toolbar: theme.mixins.toolbar,
    height: 55,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#246884",
    color: "#F2F1ED",
  },
  text: {
    textAlign: "center",
    verticalAlign: "center",
    position: "relative",
    top: "70%",
    left: "20%",
    margin: theme.spacing(3, 0, 0, 1),
    transform: "translateY(-50%)",
  },
  text2: {
    fontWeight: "500px",
  },
  icon: {
    margin: theme.spacing(0, 0, 0, 1),
  },
  icon2: {
    margin: theme.spacing(0, 0, 0, 2),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  divider: {
    backgroundColor: "#ffffff",
  },
  a: {},
}));

export default function ResponsiveDrawer(props) {
  const { window, mobileOpen, handleDrawerToggle } = props;
  const classes = useStyles();
  const theme = useTheme();
  const drawer = (
    <div>
      <List>
        <div className={classes.toolbar}>
          <ListItem button component="a" href="#">
            <Typography variant="h5" className={classes.text}>
              DbyT Orbit
            </Typography>
          </ListItem>
        </div>
      </List>

      <Divider variant="middle" className={classes.divider} />
      <List>
        <ListItem button component="a" href="#">
          <ListItemIcon>
            <AccountCircleIcon
              fontSize="large"
              color="primary"
              className={classes.icon}
            />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="h6">Admin</Typography>}
          ></ListItemText>
        </ListItem>
      </List>
      <Divider variant="middle" className={classes.divider} />
      <List>
        {["Dashboard"].map((text) => (
          <ListItem button key={text} component="a" href="#">
            <ListItemIcon>
              <DashboardIcon className={classes.icon2} color="primary" />
            </ListItemIcon>
            <ListItemText primary={text} />
            <Divider
              variant="middle"
              className={classes.divider}
              orientation="horizontal"
            />
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
      <List>
        {[].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
