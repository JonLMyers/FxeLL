import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TargetBar from '../TargetBar/TargetBar';
import Prompt from '../Prompt/Prompt';
import DisplayWindow from '../DisplayWindow/DisplayWindow';
import teal from '@material-ui/core/colors/teal';
import CssBaseline from '@material-ui/core/CssBaseline';

const defaultTheme = createMuiTheme({
    palette: {
      primary: '#006064',
      secondary: {
        main: '#00bfa5',
      },
    },
  });
  
  function Palette() {
    return (
      <MuiThemeProvider theme={defaultTheme}>
        <TargetBar />
        <DisplayWindow />
        <Prompt />
      </MuiThemeProvider>
    );
  }

  export default Palette;