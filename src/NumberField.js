/**
 * NumberField Component for tingle
 * @auther fushan
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
let classnames = require('classnames');
let Context    = require('tingle-context');
let TextField  = require('tingle-text-field');

let numberRegExp = /^(\d+\.\d*)|(\d+\.)|\d+/;

/**
 * NumberField Component for Tingle
 */
class NumberField extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange(newValue) {
        this.props.onChange(newValue);
    }

    numberFilter(newValue) {

        /* reset seperator charactor */
        if (this.category === 'number') {
            newValue = newValue.replace(/\s/g, '');
        } else if (this.category === 'money') {
            newValue = newValue.replace(/\,/g, '');
        }

        let matches = newValue.match(numberRegExp);
        let number = '';
        if(matches) {
            number =  matches[0];
        }

        /* by seperator type for output */
        if (this.category === 'number') {
            return number.replace(/(\d{4})(?=\d)/g,"$1 ");
        } else if (this.category === 'money') {
            return number.replace(/(\d{3})(?=\d)/g,"$1,");
        } else {
            return number;
        }
    }

    handleBlur(newValue) {
        let cleanedNewValue = newValue.replace(/\.$/, '').replace(/^0*([0-9]+)/, '$1');
        if (cleanedNewValue !== newValue) {
            this.props.onChange(cleanedNewValue);
        }
        this.props.onBlur(cleanedNewValue);
    }

    render() {
        let t = this;
        return (
            <TextField {...t.props}
             type={"text"}
             filter={t.numberFilter}
             onBlur={t.handleBlur.bind(t)}
             onChange={t.handleChange.bind(t)}/>
        );
    }
}

NumberField.defaultProps = {
    className:   '',
    filter:      function (v) {return v;},
    label:       '',
    onChange:    Context.noop,
    onFocus:     Context.noop,
    onBlur:      Context.noop,
    placeholder: '',
    readOnly:    false,
    multiLine:   false,
    type:        'text',
    value:       '',
    category:    ''
};

NumberField.propTypes = {
    className:   React.PropTypes.string,
    filter:      React.PropTypes.func,
    label:       React.PropTypes.string,
    onChange:    React.PropTypes.func,
    onFocus:     React.PropTypes.func,
    onBlur:      React.PropTypes.func,
    placeholder: React.PropTypes.string,
    readOnly:    React.PropTypes.bool,
    multiLine:   React.PropTypes.bool,
    type:        React.PropTypes.string,
    category:    React.PropTypes.string
};

NumberField.displayName = 'NumberField';

module.exports = NumberField;