import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

// import AddSaid from  './containers/said/addSaid'
import Said from  './containers/said'
import Home from  './views/home'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        {<Route path="index" component={Home} />}
        {/*<Route path="said/add" component={AddSaid} />*/}
        <Route path="said" component={Said} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
