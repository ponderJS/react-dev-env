/**
 * author: 
 * date: 
 */

import {Component} from 'react';
import {render as Render} from 'react-dom';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

import Home from './containers/home.jsx';
import Page from './containers/page.jsx';
import NotFound from './containers/404.jsx';

import './css/main.css';

class App extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact strict path="/" component={Home} />
                    <Route path="/page" component={Page} />
                    <Route component={NotFound} />
                    <Redirect from="/home" to="/" />
                </Switch>
            </Router>
        );
    }
}

Render(<App />, document.querySelector('.wrapper'));
