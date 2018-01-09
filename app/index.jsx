import 'react-dom';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

import Home from './containers/home.jsx';
import Hello from './containers/hello.jsx';
import Bye from './containers/bye.jsx';
import NotFound from './containers/404.jsx';

const App = () => (
    <Router>
        <Switch>
            <Route exact strict path="/" component={Home} />
            <Route exact path="/hello" component={Hello} />
            <Route exact path="/bye" component={Bye} />
            <Redirect from="/home" to="/" />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

ReactDOM.render(<App />, document.querySelector('.wrapper'));