/**
 * 基础输入框
 */


import {Component} from 'react';
import PropTypes from 'prop-types';

class BaseInput extends Component {
    
    render(){
        var inputClassName='input'+(!!this.props.inputClassName?' '+this.props.inputClassName:'');
        return (
            <div className={inputClassName}>
                <input type={this.props.inputType} name={this.props.inputName} id={this.props.inputId} placeholder={this.props.placeholder} />
                {this.props.children}
            </div>
        );
    }
}

BaseInput.defaultProps = {
    inputType:'text'
}

BaseInput.propTypes = {
    className: PropTypes.string,
    inputId: PropTypes.string,
    inputName: PropTypes.string,
    placeholder: PropTypes.string
}

export default BaseInput;