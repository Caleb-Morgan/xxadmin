import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict.jsx';
import Temperatureinput from './TemperatureInput.jsx'

export default class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }
    handelCelsiusChange(temperature){
        this.setState({scale: 'c', temperature})
    }
    handelFahrenheitChange(temperature){
        this.setState({scale: 'f', temperature})
    }
    toCelsius(fahrenheit){
        return (fahrenheit-32) * 5 / 9;
    }
    toFahrenheit(celsius){
        return (celsius / 9 * 5) + 32;
    }
    tryConvert(temperature, convert){
        const input = parseFloat(temperature);
        if(Number.isNaN(input)){
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000
        return rounded.toString();
    }
    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? this.tryConvert(temperature,this.toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? this.tryConvert(temperature,this.toFahrenheit) : temperature;
        return(
            <div>
                <Temperatureinput scale="c" temperature={celsius} onTemperatureChange={ this.handelCelsiusChange.bind(this) }/>
                <Temperatureinput scale="f" temperature={fahrenheit} onTemperatureChange={ this.handelFahrenheitChange.bind(this) }/>
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        )
    }
}