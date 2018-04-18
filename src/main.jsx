import React, {Component} from 'react';
import {render as Render} from 'react-dom';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

import Home from './pages/home.jsx';
import NotFound from './pages/404.jsx';

import 'antd/dist/antd.less';

class App extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route component={NotFound} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </Router>
        );
    }
}

Render(<App />, document.getElementById('root'));
