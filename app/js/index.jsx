import React from 'react';
import ReactDOM from 'react-dom';
import XHR from 'axios';

class Hello extends React.Component{
    render(){
        return <h1>Hello world</h1>;
    }
}

ReactDOM.render(<Hello />,document.getElementById('wrapper'));