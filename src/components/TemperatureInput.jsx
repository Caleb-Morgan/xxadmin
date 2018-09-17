import React, { Component } from 'react';

export default class TemperatureInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            temperature: ''
        }
    }
    handelChange(e){
        this.props.onTemperatureChange(e.target.value);
        /* this.setState({
            temperature: e.target.value
        }) */
    }
    render(){
        const scaleName = {
            c: 'Celsius',
            f: 'Fahrenheit'
        }
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleName[scale]}: </legend>
                <input type="text" value={ temperature } onChange={ this.handelChange.bind(this) }/>
            </fieldset>
        )
    }
}