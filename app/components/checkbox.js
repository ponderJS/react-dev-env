/**
 * author: ponderJS
 * create: 2018.01.29
 */

import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

class CheckboxOnly extends PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = props.onChange.bind(this);
    }
    render() {
        let {
            id,
            name,
            type,
            style,
            className,
            defaultClassName,
            checked,
            disabled,
            readOnly,
            tabIndex,
            onFocus,
            onBlur,
            onClick,
            onChange,
            autoFocus,
            value,
            ...otherProps
        } = this.props;
        let elementAttrs = Object.keys(otherProps).reduce((prev, key) => {
            if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
                prev[key] = otherProps[key];
            }
            return prev;
        }, {});
        let classString = ClassNames(defaultClassName, className, {
            [`${defaultClassName}-checked`]: checked,
            [`${defaultClassName}-disabled`]: disabled
        });
        return (
            <span className={classString} style={style}>
                <input
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    readOnly={readOnly}
                    disabled={disabled}
                    tabIndex={tabIndex}
                    autoFocus={autoFocus}
                    checked={checked}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onClick={onClick}
                    onChange={this.handleChange}
                    {...elementAttrs}
                />
                <span className={`${defaultClassName}-inner`} />
            </span>
        );
    }
}

CheckboxOnly.defaultProps = {
    defaultClassName: 'checkbox',
    type: 'checkbox',
    disabled: false,
    checked: false,
    onChange() { },
}

CheckboxOnly.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
    value: PropTypes.string,
    style: PropTypes.object,
    defaultClassName: PropTypes.string,
    className: PropTypes.string,
    tabIndex: PropTypes.number,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    autoFocus: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func
}


class Checkbox extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            name,
            labelText,
            defaultClassName,
            ...otherProps
        } = this.props;
        return (
            <div className={`${defaultClassName}-wrapper`}>
                <CheckboxOnly name={name} id={`$checkbox-${name}`} type={'checkbox'} defaultClassName={defaultClassName} {...otherProps} />
                <label htmlFor={`$checkbox-${name}`}>{labelText}</label>
            </div>
        )
    }
}

Checkbox.defaultProps = {
    defaultClassName: 'checkbox',
}

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    labelText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};



export { CheckboxOnly, Checkbox as default };