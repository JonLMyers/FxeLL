import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = '10vw';

const useStyles = makeStyles(theme => ({
    DisplayWindow: {
      maxWidth: '90vw',
      marginLeft: drawerWidth,
      backgroundColor: theme.palette.secondary.main,
      height: '90vh',
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