var React=require('react');
var ReactDOM=require('react-dom');

var Name=require('./components/name.jsx');

var Hello=React.createClass({
    render:function(){
        return <p><Name /> Hello World!</p>
    }
});

ReactDOM.render(<Hello />,document.getElementById('box'));