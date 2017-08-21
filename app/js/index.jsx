let React=require('react'),
    ReactDOM=require('react-dom'),
    XHR=require('axios');

class Hello extends React.Component{
    render(){
        return <h1>Hello world</h1>;
    }
}


ReactDOM.render(<Hello />,document.getElementById('wrapper'));