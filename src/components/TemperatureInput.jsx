import React, { Component } from 'react';

export default class TemperatureInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            temperature: ''
        }
    }
    handelChange(e){
        this.setState({
            temperature: e.target.value
        })
    }
    toCelsius = (e, fahrenheit) => {
        return (fahrenheit-32) * 5 / 9;
    }
    toFahrenheit = (e, celsius) => {
        return (celsius / 9 * 5) + 32;
    }
    tryConvert = (e, temperature, convert) => {
        const input = parseFloat(temperature);
        if(Number.isNaN(input)){
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000
        return rounded;
    }
    render(){
        const scaleName = {
            c: 'Celsius',
            f: 'Fahrenheit'
        }
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleName[scale]}: </legend>
                <input type="text" value={ temperature } onChange={ this.handelChange.bind(this) }/>
            </fieldset>
        )
    }
}