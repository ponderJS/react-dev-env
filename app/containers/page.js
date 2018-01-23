import {Route} from 'react-router-dom';

import Hello from './hello.js';
import Bye from './bye.js';

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