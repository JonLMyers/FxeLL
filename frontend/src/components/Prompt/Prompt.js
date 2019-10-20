import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/styles';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    Prompt: {
      marginLeft: drawerWidth,
      backgroundColor: '#37474f',
      height: '15vh',
      maxWidth: '100%'
    },
    PromptScript: {
        variant: "h1",
    }
  }));

export default function Prompt() {
    const classes = useStyles();
  
    return (
        <React.Fragment>
        <CssBaseline />
        <Container className={classes.Prompt} fixed>
          <Typography className={classes.PromptScript} >FxeLL> _</Typography>
        </Container>
      </React.Fragment>
    );
  }