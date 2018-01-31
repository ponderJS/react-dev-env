import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

class Input extends PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = props.onChange.bind(this);
        this.handleClick = props.onClick.bind(this);
    }
    render() {
        let {
            id,
            name,
            type,
            value,
            style,
            placeholder,
            className,
            defaultClassName,
            disabled,
            readOnly,
            tabIndex,
            hasError,
            onFocus,
            onBlur,
            onClick,
            onChange,
            autoFocus,
            children,
            ...others
        } = this.props;
        let elementAttrs = Object.keys(others).reduce((prev, key) => {
            if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
                prev[key] = others[key];
            }
            return prev;
        }, {});
        let classString = ClassNames(defaultClassName, className, {
            [`${defaultClassName}-disabled`]: disabled,
            [`${defaultClassName}-error`]: hasError
        });
        return (
            <div className={classString} style={style}>
                <input
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    disabled={disabled}
                    tabIndex={tabIndex}
                    autoFocus={autoFocus}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onClick={this.handleClick}
                    onChange={this.handleChange}
                    {...elementAttrs}
                />
                {children}
            </div>
        );
    }
}

Input.defaultProps = {
    defaultClassName: 'input',
    type: 'text',
    onChange() { },
    onClick() { },
    onFocus() { },
    onBlur() { }
}

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password']).isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    style: PropTypes.object,
    placeholder: PropTypes.string,
    defaultClassName: PropTypes.string,
    className: PropTypes.string,
    tabIndex: PropTypes.number,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    autoFocus: PropTypes.bool,
    hasError: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func
}

export default Input;