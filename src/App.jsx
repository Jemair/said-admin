import React, { Component } from 'react';
// import { Button } from 'antd';
import Navigator from  './layouts/Navigator'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigator></Navigator>
      </div>
    );
  }
}

export default App;