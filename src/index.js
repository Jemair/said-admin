import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory } from 'react-router'

import AddSaid from  './views/Said/AddSaid'
import Index from  './views/Index/Index'

class Test extends Component {
  render() {
    return <h3>About</h3>
  }
}
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="index" component={Index} />
      <Route path="said/add" component={AddSaid} />
      <Route path="test" component={Test} />
    </Route>
  </Router>,
  document.getElementById('root')
);
