var React = require('react'),
    ReactDOM = require('react-dom'),
    request = require('./utils/request.js');

require('../css/common.css');


class App extends React.Component {
    render() {
        return <h1><i className="fa fa-home fa-fw"></i> Hello world!</h1>;
    }
    componentDidMount() {
        console.log(request);
    }
}

ReactDOM.render(<App />, document.querySelector('.wrapper'));