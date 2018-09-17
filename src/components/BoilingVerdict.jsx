import React, { Component } from 'react';

export default class BoilingVerdict extends Component{
    render(){
        let element = '';
        if(this.props.celsius>=100){
            element = <p>水会烧开</p>
        }else{
            element = <p>水不会烧开</p>
        }
        return(
            <div>{element}</div>
        )
    }
}