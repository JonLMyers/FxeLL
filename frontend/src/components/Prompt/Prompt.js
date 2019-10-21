import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withTheme } from '@material-ui/styles';
import { width } from '@material-ui/system';
const drawerWidth = '10vw';

const useStyles = makeStyles(theme => ({
    Prompt: {
      marginLeft: drawerWidth,
      backgroundColor: '#37474f',
      height: '10vh',
      maxWidth: '90vw',
    },
    ShellPrompt: {
      marginLeft: `10vw`,
      height: `5vh`,
      width: `90vw`
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
  }));

export default function Prompt() {
    const classes = useStyles();
  
    return (
        <React.Fragment>
        <CssBaseline />
        <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
        <TextField
          className={classes.ShellPrompt}
          id="filled-full-width"
          label="root@Team1Win"
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">FxeLL$ </InputAdornment>,
          }}
        />
        </Toolbar>
      </AppBar>
      </React.Fragment>
    );
  }