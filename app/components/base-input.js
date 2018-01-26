/**
 * 基础输入框
 */


import {Component} from 'react';
import PropTypes from 'prop-types';

class BaseInput extends Component {
    
    render(){
        return (
            <div className={this.props.inputClassName}>
                <input type={this.props.inputType} name={this.props.inputName} id={this.props.inputId} placeholder={this.props.placeholder} />
                {this.props.children}
            </div>
        );
    }
}

BaseInput.propTypes = {
    inputClassName: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputName: PropTypes.string,
    inputId: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.any,
    placeholder: PropTypes.string
}

export default BaseInput;