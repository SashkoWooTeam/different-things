import React, {Component} from 'react'

export default class CustomNumberInput extends Component {
    constructor(props) {
        super(props);

        let value = this._setValueIntoRange.bind(this);
        this.state = {
            value: props.value || '0',
        };

        this.minValue = props.minValue;
        this.maxValue = props.maxValue;
        this.disabled = props.disabled;
        this.onlyInteger = props.onlyInteger;

        this.allowedValue = ['-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        this._onChanged = this._onChanged.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
        this._incrementValue = this._incrementValue.bind(this);
        this._decrementValue = this._decrementValue.bind(this);
    }

    render() {
        return (
            <div className="novi-input-number">
                <input
                    className="novi-input-number"
                    onChange={this._onChanged}
                    _onKeyDown={this._onKeyDown}
                    value={this.state.value}
                    {...this.props.input}
                />
                <div className="novi-input-number-arrows">
                    <div className="novi-input-number-arrow-up" onClick={this._incrementValue}>
                        <svg viewBox="0 0 20 20">
                            <path
                                d="M0 15c0 0.128 0.049 0.256 0.146 0.354 0.195 0.195 0.512 0.195 0.707 0l8.646-8.646 8.646 8.646c0.195 0.195 0.512 0.195 0.707 0s0.195-0.512 0-0.707l-9-9c-0.195-0.195-0.512-0.195-0.707 0l-9 9c-0.098 0.098-0.146 0.226-0.146 0.354z"></path>
                        </svg>
                    </div>
                    <div className="novi-input-number-arrow-down" onClick={this._decrementValue}>
                        <svg viewBox="0 0 20 20">
                            <path
                                d="M0 6c0-0.128 0.049-0.256 0.146-0.354 0.195-0.195 0.512-0.195 0.707 0l8.646 8.646 8.646-8.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-9 9c-0.195 0.195-0.512 0.195-0.707 0l-9-9c-0.098-0.098-0.146-0.226-0.146-0.354z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }

    _setValueIntoRange(value) {
        let value, min, max;
        value = this.state.value;
        min = this.minValue;
        max = this.maxValue;

        if (min !== undefined && min > value) {
            return min;
        }

        if (max !== undefined && max < value) {
            return max;
        }

        return value;
    }

    _onChanged(e) {
        this.state.value = e.target.value;
        this._validateValue();
        this.setState({value: this.state.value});
    }

    _onKeyDown(e) {
        let keyCode = e.keyCode;

        switch (true) {
            case keyCode === 40:
                this._decrementValue(e);
                break;
            case keyCode === 38:
                this._incrementValue(e);
        }

    }

    _validateValue() {
        let value = this.state.value.split('');
        let allowedValue = this.allowedValue;
        let newValue = [];
        let max = this.props.max ? this.props.max : '';
        let min = this.props.min ? this.props.min : '';

        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < allowedValue.length; j++) {
                if (value[i] === allowedValue[j]) {
                    newValue.push(value[i]);
                }
            }
        }

        newValue = parseInt(newValue.join(''));

        if (max !== '' && max <= newValue) {
            newValue = max
        }

        if (min !== '' && min >= newValue) {
            newValue = min
        }

        this.state.value = newValue.toString();
    }

    _incrementValue(e) {
        let value = parseInt(this.state.value);

        switch (true) {
            case e.shiftKey:
                value = value + 10;
                break;
            case e.ctrlKey || e.metaKey:
                value = value + 100;
                break;
            case e.altKey:
                value = value + 1000;
                break;
            default:
                value++;
        }

        this.state.value = value.toString();
        this._validateValue();
        this.setState({value: this.state.value});
    }

    _decrementValue(e) {
        let value = parseInt(this.state.value);

        switch (true) {
            case e.shiftKey:
                value = value - 10;
                break;
            case e.ctrlKey || e.metaKey:
                value = value - 100;
                break;
            case e.altKey:
                value = value - 1000;
                break;
            default:
                value--;
        }

        this.state.value = value.toString();
        this._validateValue();
        this.setState({value: this.state.value});
    }
}