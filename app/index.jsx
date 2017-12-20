import 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Home from './containers/home.jsx';
import Hello from './containers/hello.jsx';
import Bye from './containers/bye.jsx';

const App = () => (
    <Router>
        <div>
            <Route path="/" component={Home}/>
            <Route path="/hello" component={Hello}/>
            <Route path="/bye" component={Bye}/>
        </div>
    </Router>
);

ReactDOM.render(<App />, document.querySelector('.wrapper'));