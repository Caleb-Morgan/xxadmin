import React, { Component } from 'react';

class Clock extends Component{
	constructor(props){
		super(props)
		this.state = {date:new Date()}
	}
	componentDidMount(){
		this.timeID = setInterval(()=>{
			this.tick()
		})
	}
	componentWillUnmount(){
		clearInterval(this.timeID)
	}
	tick(){
		this.setState({
			date:new Date()
		})
	}
	render() {
		return(
			<section className="Clock">
				<h1>Clock</h1>
				<time>{this.state.date.toLocaleTimeString()}</time>
			</section>	
		)
	}
}
export default Clock;