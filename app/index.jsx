var React=require('react'),
    ReactDOM = require('react-dom');
    Request=require('axios');

require('../css/common.css');


class Hello extends React.Component{
    render(){
        return <h1><i className="fa fa-home fa-fw"></i> Hello world!</h1>;
    }
    componentDidMount(){
        // console.log(style)
    }
}

ReactDOM.render(<Hello />,document.querySelector('.wrapper'));