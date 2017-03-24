import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory } from 'react-router'

import AddSaid from  './views/Said/AddSaid'
import Index from  './views/Index/Index'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="index" component={Index} />
      <Route path="said/add" component={AddSaid} />
    </Route>
  </Router>,
  document.getElementById('root')
);
