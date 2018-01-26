import {Component} from 'react';
import {CheckboxOnly as Checkbox} from './checkbox';
import PropTypes from 'prop-types';

// function Radio (props){
//     return <Checkbox  {...props} type={'radio'} defaultClassName={'radio'} />
// }

class Radio extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {
            name,
            value,
            labelText,
            defaultClassName,
        } = this.props;
        return (
            <div className={`${defaultClassName}-wrapper`}>
                <Checkbox name={name} value={value} id={`${name}-${value}`} type={'radio'} defaultClassName={defaultClassName}/>
                <label htmlFor={`${name}-${value}`}>{labelText}</label>
            </div>
        )
    }
}

Radio.defaultProps={
    defaultClassName:'radio'
}

Radio.propTypes={
    name:PropTypes.string.isRequired,
    value:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    labelText:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired
};

export default Radio;