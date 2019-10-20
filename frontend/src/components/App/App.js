import React, { Component } from 'react';
import TargetBar from '../TargetBar/TargetBar';
import Prompt from '../Prompt/Prompt';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import DisplayWindow from '../DisplayWindow/DisplayWindow';


class App extends Component {
  render() {
    return (
      <div>
        <TargetBar />
        <DisplayWindow />
        <Prompt />
      </div>
    );
  }
}

export default App;
