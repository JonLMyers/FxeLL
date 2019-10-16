import React, { Component } from 'react';
import ToolBar from '../ToolBar/ToolBar'
import TargetBar from '../TargetBar/TargetBar';

class App extends Component {
  render() {
    return (
      <div>
        <ToolBar/>
        <TargetBar/>
        <p>Work in progress.</p>
      </div>
    );
  }
}

export default App;
