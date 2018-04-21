import React, {Component} from 'react'

class CustomNumberInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '0',
        };

        this.allowedValue = ['-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        this.onChanged = this.onChanged.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.incrementValue = this.incrementValue.bind(this);
        this.decrementValue = this.decrementValue.bind(this);
    }

    onChanged(e) {
        this.state.value = e.target.value;
        this.validateValue();
        this.setState({value: this.state.value});
    }

    onKeyDown(e) {
        let keyCode = e.keyCode;

        switch (true) {
            case keyCode === 40:
                this.decrementValue(e);
                break;
            case keyCode === 38:
                this.incrementValue(e);
        }

    }

    validateValue() {
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

    incrementValue(e) {
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
        this.validateValue();
        this.setState({value: this.state.value});
    }

    decrementValue(e) {
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
        this.validateValue();
        this.setState({value: this.state.value});
    }

    render() {
        return (
            <div className="novi-input-number">
                <input
                    className="novi-input-number"
                    onChange={this.onChanged}
                    onKeyDown={this.onKeyDown}
                    value={this.state.value}
                    {...this.props}
                />
                <div className="novi-input-number-arrows">
                    <div className="novi-input-number-arrow-up" onClick={this.incrementValue}>
                        <svg viewBox="0 0 20 20">
                            <path
                                d="M0 15c0 0.128 0.049 0.256 0.146 0.354 0.195 0.195 0.512 0.195 0.707 0l8.646-8.646 8.646 8.646c0.195 0.195 0.512 0.195 0.707 0s0.195-0.512 0-0.707l-9-9c-0.195-0.195-0.512-0.195-0.707 0l-9 9c-0.098 0.098-0.146 0.226-0.146 0.354z"></path>
                        </svg>
                    </div>
                    <div className="novi-input-number-arrow-down" onClick={this.decrementValue}>
                        <svg viewBox="0 0 20 20">
                            <path
                                d="M0 6c0-0.128 0.049-0.256 0.146-0.354 0.195-0.195 0.512-0.195 0.707 0l8.646 8.646 8.646-8.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-9 9c-0.195 0.195-0.512 0.195-0.707 0l-9-9c-0.098-0.098-0.146-0.226-0.146-0.354z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomNumberInput