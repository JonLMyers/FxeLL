import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TargetBar from '../TargetBar/TargetBar';
import Prompt from '../Prompt/Prompt';
import DisplayWindow from '../DisplayWindow/DisplayWindow';
import teal from '@material-ui/core/colors/teal';


const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#428e92',
      main: '#006064',
      dark: '#00363a',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#ffffff',
    },
  },
});

class App extends Component {
  render() {
    return (
      <div>
      <MuiThemeProvider theme={defaultTheme}>
        <TargetBar />
        <DisplayWindow />
        <Prompt />
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
