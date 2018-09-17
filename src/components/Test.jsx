import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict.jsx';
import Temperatureinput from './TemperatureInput.jsx'

export default class Test extends Component{
    render(){
        return(
            <div>
                <Temperatureinput scale="c"/>
                <Temperatureinput scale="f"/>
            </div>
        )
    }
}