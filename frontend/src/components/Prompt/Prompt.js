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
import { width, typography } from '@material-ui/system';
const drawerWidth = '10vw';

const useStyles = makeStyles(theme => ({
    Prompt: {
      marginLeft: drawerWidth,
      height: '10vh',
      maxWidth: '85vw',
    },
    ShellPrompt: {
      marginLeft: `15vw`,
      height: `5vh`,
      width: `85vw`,
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText
    },
    appBar: {
      top: 'auto',
      bottom: 0,
      backgroundColor: theme.palette.secondary.dark
    },
    color:{
      color: theme.palette.primary.contrastText
    }
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
          id="prompt"
          label="root@Team1Win"
          fullWidth
          margin="dense"
          variant="standard"
          disableunderline="True"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">FxeLL$</InputAdornment>,
          }}
        />
        </Toolbar>
      </AppBar>
      </React.Fragment>
    );
  }