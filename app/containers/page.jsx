import {Route} from 'react-router-dom';

import Hello from './hello.jsx';
import Bye from './bye.jsx';

function Page({match}){
    return (
        <div>
            <p>子路由页面</p>
            <Route exact path={`${match.url}/hello`} component={Hello} />
            <Route exact path={`${match.url}/bye`} component={Bye} />
        </div>
    );
}

export default Page;