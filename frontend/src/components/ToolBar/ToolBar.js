import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = '15vw';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
    color: "inherit",
  },
  buttonEnd: {
    flexGrow: 1,
    color: "inherit",
  },
  input: {
    display: 'none',
  },
  appBar: {
    marginLeft: drawerWidth,
    width: `85vw`,
    maxWidth: `85vw`,
    maxHeight: `8vh`,
    backgroundColor: theme.palette.secondary.dark,
  },
  title: {
    marginLeft: '60vw',
  },
  toolbar: theme.mixins.toolbar,
}));


export default function ToolBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Button className={classes.button}>Terminal</Button>
        <Button className={classes.button}>Command History</Button>
        <Button className={classes.button}>Statistics</Button>
        <Button className={classes.button}>Themes</Button>

      </Toolbar>
    </AppBar>

  );
}