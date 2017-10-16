var React=require('react'),
    ReactDOM = require('react-dom');
    Request=require('axios');

    require('../css/index.css');


class Hello extends React.Component{
    render(){
        return <h1>Hello world!</h1>;
    }
}

ReactDOM.render(<Hello />,document.getElementById('APP'));