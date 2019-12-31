import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route } from './router'
import Home from './components/Home';
import User from './components/User';
ReactDOM.render(
    <Router>
        <Route exact={true} path="/" component={Home} />
        <Route path="/user" component={User} />
    </Router>,
    document.getElementById('root')
);
