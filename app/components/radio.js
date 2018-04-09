import {PureComponent} from 'react';
import {CheckboxOnly as Checkbox} from './checkbox';
import PropTypes from 'prop-types';

class Radio extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        let {
            name,
            value,
            labelText,
            defaultClassName,
            ...otherProps
        } = this.props;
        return (
            <div className={`${defaultClassName}-wrapper`}>
                <Checkbox name={name} value={value} id={`$radio-${name}-${value}`} type={'radio'} defaultClassName={defaultClassName} {...otherProps} />
                <label htmlFor={`$radio-${name}-${value}`}>{labelText}</label>
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