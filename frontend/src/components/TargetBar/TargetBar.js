import React, { Component } from "react";
import ToolBar from '../ToolBar/ToolBar'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FlareIcon from '@material-ui/icons/Flare';
import ExposureIcon from '@material-ui/icons/Exposure';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows';
import RouterIcon from '@material-ui/icons/Router';
import DvrIcon from '@material-ui/icons/Dvr';
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const drawerWidth = '15vw';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.dark,
    color: "white"
  },
  
}));

export default function TargetBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ToolBar/>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <ListItem button>
          <ListItemIcon ><FlareIcon color="primary" colorprimary="white"/></ListItemIcon>
          <ListItemText primary={'Team1Win'} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon><ExposureIcon color="primary" colorprimary="white"/></ListItemIcon>
          <ListItemText primary={'Add/Remove Targets'} />
        </ListItem>
        <Divider />
        <List>
          {['Team1Win', 'Team2Win', 'Team3Win', 'Team4Win'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><LaptopMacIcon color="primary" colorprimary="white"/></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><RouterIcon color="primary" colorprimary="white"/></ListItemIcon>
            <ListItemText primary={'Net Targets'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon><LaptopWindowsIcon color="primary" colorprimary="white"/></ListItemIcon>
            <ListItemText primary={'Win Targets'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon><DvrIcon color="primary" colorprimary="white"/></ListItemIcon>
            <ListItemText primary={'Nix Targets'} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}