import React from 'react'
import {render} from 'react-dom'
import CustomNumberInput from '../../dist/novi-input-number'

let defaultData = {
    value: 23,
    maxValue : 55,
    minValue : -100,
    onlyInteger : true,
    disabled : false,
    input : {
        placeholder: "Insert a number"
    }
};

render(<CustomNumberInput placeholder='Text' {... defaultData}  />, document.getElementById('app'));