import { Component } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

class CheckboxOnly extends Component {
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
            onChange,
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
                name:props.name,
                value:props.value
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

CheckboxOnly.defaultProps = {
    defaultClassName: 'checkbox',
    type: 'checkbox',
    disabled: false,
    checked: false,
    onChange(){},
}

CheckboxOnly.propTypes = {
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



export {CheckboxOnly};