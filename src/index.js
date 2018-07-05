import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import ErrorPage from './pages/error';
import './index.less';

function App() {
    return (
        <Router>
            <Switch>
                {/* 首页 */}
                <Route exact path="/" component={Home} />
                {/* 登录 */}
                <Route exact path="/login" component={Login} />
                {/* fallback */}
                <Route component={ErrorPage} />
            </Switch>
        </Router>
    );
}


ReactDOM.render(<App />, document.getElementById('wrapper'));
