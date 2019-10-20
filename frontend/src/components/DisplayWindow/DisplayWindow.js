import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    DisplayWindow: {
      maxWidth: '100%',
      marginLeft: drawerWidth,
      backgroundColor: '#263238',
      height: '85vh'
    },
  }));

export default function DisplayWindow() {
    const classes = useStyles();
  
    return (
        <React.Fragment>
        <CssBaseline />
        <Container className={classes.DisplayWindow} fixed>
          <Typography component="div" />
        </Container>
      </React.Fragment>
    );
  }