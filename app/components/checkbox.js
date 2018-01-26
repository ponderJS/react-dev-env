import { Component } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
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
            autoFocus,
            value,
            // ...others
        } = this.props;

        // let elementAttrs = Object.keys(others).reduce((prev, key) => {
        //     if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        //         prev[key] = others[key];
        //     }
        //     return prev;
        // }, {});
        
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
                    readOnly={readOnly}
                    disabled={disabled}
                    tabIndex={tabIndex}
                    checked={checked}
                    onClick={onClick}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    autoFocus={autoFocus}
                    onChange={this.handleChange}
                />
                <span className={`${defaultClassName}-inner`} />
            </span>
        );
    }

    handleChange(e) {
        const { props } = this;
        if (props.disabled) {
            return;
        }
        props.onChange({
            target: {
                checked: e.target.checked,
                // ...props
            },
            stopPropagation() {
                e.stopPropagation();
            },
            preventDefault() {
                e.preventDefault();
            },
        });
    }

}

const defaultProps = {
    defaultClassName: 'checkbox',
    type: 'checkbox',
    disabled: false,
    checked: false,
    onChange(){},
}

const propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    style: PropTypes.object,
    defaultClassName: PropTypes.string,
    className: PropTypes.string,
    tabIndex: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    autoFocus: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func
}

Checkbox.defaultProps = defaultProps;
Checkbox.propTypes = propTypes;

export default Checkbox;